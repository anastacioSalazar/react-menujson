export interface ThirdMenuItemData {
  Name: string;
  UrlIcon?: string;
  UrlSite?: string;
}

export interface SubMenuItemData {
  Name: string;
  UrlIcon?: string;
  UrlSite?: string;
  ThirdMenu?: ThirdMenuItemData[];
}

export interface MenuItemData {
  Name: string;
  UrlIcon?: string;
  Description?: string;
  SubMenu?: SubMenuItemData[];
}

export interface MenuJSON {
  Menu: MenuItemData[];
}

export interface MenuProps {
  /** JSON con la estructura del menú, provisto por el usuario */
  data: MenuJSON;
  /** Asigna un color distinto a cada ítem de primer nivel */
  multicolor?: boolean;
  /** Color de fondo fijo para los ítems de primer nivel (ignorado si multicolor=true) */
  backgroundColor?: string;
  /** Muestra el botón flotante para mostrar/ocultar el menú (default: true) */
  showToggle?: boolean;
  className?: string;
  /**
   * Número mínimo de ítems de primer nivel que deben mostrarse por fila,
   * sin importar el tamaño de pantalla. En pantallas pequeñas los ítems
   * ocuparán el ancho disponible de su columna; en pantallas grandes
   * conservan su tamaño natural (ver `maxItemWidth`) sin estirarse.
   */
  minItemsPerRow?: number;
  /**
   * Ancho máximo en px de cada ítem de primer nivel cuando se usa
   * `minItemsPerRow`. Evita que las tarjetas se estiren en pantallas
   * grandes. Default: 260.
   */
  maxItemWidth?: number;
}