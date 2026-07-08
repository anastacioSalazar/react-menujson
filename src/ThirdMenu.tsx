import type { ThirdMenuItemData } from './types';

interface ThirdMenuProps {
  items: ThirdMenuItemData[];
  /** Cierra este submenú (nivel 3) desde el botón "X" */
  onClose: () => void;
}

export function ThirdMenu({ items, onClose }: ThirdMenuProps) {
  return (
    <div className="rmj-third-menu-wrapper" onClick={(e) => e.stopPropagation()}>
      <div className="rmj-third-menu-content">
        <div className="rmj-menu-arrow rmj-side-arrow">◀</div>
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
        {items.map((thirdItem, index) => (
          <div className="rmj-menu-third-level" key={`${thirdItem.Name}-${index}`}>
            <a href={thirdItem.UrlSite || '#'} tabIndex={0}>
              {thirdItem.UrlIcon && (
                <img src={thirdItem.UrlIcon} alt={`${thirdItem.Name} icon`} className="rmj-third-menu-icon" />
              )}
              <p>{thirdItem.Name || 'Untitled'}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}