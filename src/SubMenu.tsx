import { useState } from 'react';
import type { SubMenuItemData } from './types';
import { SubMenuItem } from './SubMenuItem';

interface SubMenuProps {
  items: SubMenuItemData[];
  /** Cierra este submenú (nivel 2) desde el botón "X" */
  onClose: () => void;
}

export function SubMenu({ items, onClose }: SubMenuProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="rmj-submenu-wrapper">
      <div className="rmj-submenu-content">
        <div className="rmj-menu-arrow">▲</div>
        <button
          type="button"
          className="rmj-close-btn"
          aria-label="Cerrar submenú"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {items.map((subItem, index) => (
          <SubMenuItem
            key={`${subItem.Name}-${index}`}
            item={subItem}
            isActive={activeIndex === index}
            onToggle={() =>
              setActiveIndex((current) => (current === index ? null : index))
            }
          />
        ))}
      </div>
    </div>
  );
}