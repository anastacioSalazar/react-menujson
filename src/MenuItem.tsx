import type { MenuItemData } from './types';
import { SubMenu } from './SubMenu';

interface MenuItemProps {
  item: MenuItemData;
  isActive: boolean;
  onToggle: () => void;
  backgroundColor?: string;
}

export function MenuItem({ item, isActive, onToggle, backgroundColor }: MenuItemProps) {
  const hasSubMenu = !!item.SubMenu && item.SubMenu.length > 0;

  return (
    <div
      className={`rmj-menu-item${isActive ? ' rmj-active' : ''}`}
      style={backgroundColor ? { backgroundColor } : undefined}
      tabIndex={0}
      role="button"
      aria-haspopup={hasSubMenu}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {item.UrlIcon && (
        <img src={item.UrlIcon} alt={`${item.Name} icon`} className="rmj-menu-icon" />
      )}
      <div className="rmj-menu-title">{item.Name || 'Untitled'}</div>
      {item.Description?.trim() && (
        <p className="rmj-menu-description">{item.Description.trim()}</p>
      )}

      {hasSubMenu && (
        <>
          <div className="rmj-submenu-indicator">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <SubMenu items={item.SubMenu!} onClose={onToggle} />
        </>
      )}
    </div>
  );
}