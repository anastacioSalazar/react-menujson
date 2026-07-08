import type { SubMenuItemData } from './types';
import { ThirdMenu } from './ThirdMenu';

interface SubMenuItemProps {
  item: SubMenuItemData;
  isActive: boolean;
  onToggle: () => void;
}

export function SubMenuItem({ item, isActive, onToggle }: SubMenuItemProps) {
  const hasThirdMenu = !!item.ThirdMenu && item.ThirdMenu.length > 0;

  const content = (
    <div className="rmj-submenu-item-content">
      {item.UrlIcon && (
        <img src={item.UrlIcon} alt={`${item.Name} icon`} className="rmj-submenu-icon" />
      )}
      <p>{item.Name || 'Untitled'}</p>
      {hasThirdMenu && (
        <div className="rmj-third-menu-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`rmj-menu-second-level${isActive ? ' rmj-active' : ''}`}
      tabIndex={0}
      role="button"
      aria-haspopup={hasThirdMenu}
      onClick={(e) => {
        if (hasThirdMenu) {
          e.stopPropagation();
          onToggle();
        }
      }}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && hasThirdMenu) {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {item.UrlSite && !hasThirdMenu ? <a href={item.UrlSite}>{content}</a> : content}
      {hasThirdMenu && <ThirdMenu items={item.ThirdMenu!} onClose={onToggle} />}
    </div>
  );
}