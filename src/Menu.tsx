import { useState, useRef, useEffect } from 'react';
import type { MenuProps } from './types';
import { MenuItem } from './MenuItem';
import './Menu.css';

const DEFAULT_COLORS = [
  '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655',
  '#283747', '#6AF9C4', '#058DC7', '#FF66CC', '#9933FF', '#CC33FF',
  '#FF2929', '#99B3CC', '#3DF500', '#E6CCFF', '#A3A3A3', '#CCCC33',
  '#CCFFFF', '#E0E0E0', '#FFE6CC',
];

export function Menu({
  data,
  multicolor = false,
  backgroundColor,
  showToggle = true,
  className = '',
  minItemsPerRow,
  maxItemWidth = 260,
  toggleColor,
}: MenuProps) {
  const [visible, setVisible] = useState(!showToggle);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cierra los submenús abiertos al hacer click fuera del contenedor
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        !target.closest('.rmj-menu-toggle')
      ) {
        setActiveIndex(null);
      }
    }
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  if (!data || !Array.isArray(data.Menu)) {
    console.error('react-menujson: "data.Menu" no es válido');
    return null;
  }

  const handleToggleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setVisible((v) => !v);
    }
  };

  const handleItemToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  const containerStyle = minItemsPerRow
    ? ({
        '--rmj-columns': minItemsPerRow,
        '--rmj-item-max-width': `${maxItemWidth}px`,
      } as React.CSSProperties)
    : undefined;

  const toggleStyle = toggleColor
    ? ({ '--rmj-toggle-color': toggleColor } as React.CSSProperties)
    : undefined;

  return (
    <>
      {showToggle && (
        <div
          className="rmj-menu-toggle"
          style={toggleStyle}
          tabIndex={0}
          role="button"
          aria-label="Toggle menu"
          onClick={() => setVisible((v) => !v)}
          onKeyDown={handleToggleKeyDown}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="rmj-menu-toggle-icon">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      )}
      <div
        ref={containerRef}
        className={`rmj-menu-root ${className}`}
        style={{ display: visible ? 'block' : 'none' }}
      >
        <div
          className={`rmj-menu-container${minItemsPerRow ? ' rmj-fixed-columns' : ''}`}
          style={containerStyle}
        >
          {data.Menu.map((item, index) => (
            <MenuItem
              key={`${item.Name}-${index}`}
              item={item}
              isActive={activeIndex === index}
              onToggle={() => handleItemToggle(index)}
              backgroundColor={
                multicolor ? DEFAULT_COLORS[index % DEFAULT_COLORS.length] : backgroundColor
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}