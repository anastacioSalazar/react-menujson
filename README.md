# React MenuJSON

[![npm version](https://img.shields.io/npm/v/react-menujson.svg)](https://www.npmjs.com/package/react-menujson)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Supported-blue.svg)](https://www.typescriptlang.org/)

A lightweight React library for building responsive multi-level navigation menus from a simple JSON structure.

Supports **up to three menu levels** with built-in navigation, customizable styles, floating toggle button, and full TypeScript support.

---

## 📸 Screenshots

| First-level menu | Second-level submenu | Third-level submenu |
|:---:|:---:|:---:|
| ![Main menu](https://res.cloudinary.com/lrtdmkhj/image/upload/v1783627260/menus_qdog01.png) | ![Submenu level 2](https://res.cloudinary.com/lrtdmkhj/image/upload/v1783627260/menu2_v1c90v.png) | ![Submenu level 3](https://res.cloudinary.com/lrtdmkhj/image/upload/v1783627260/menu_3_didrsg.png) |

---

## ✨ Features

- 🚀 Build menus directly from JSON
- 📂 Supports **3 navigation levels**
- 🎨 Optional multicolor menu items
- 🎯 Fixed background color support
- 📱 Responsive layout
- 📐 Minimum items per row configuration
- 🔘 Optional floating toggle button with customizable color
- ❌ Close button for submenus
- ⚡ Zero external dependencies
- 🔷 Fully typed with TypeScript
- 📦 Supports CommonJS and ES Modules

---

# Installation

### npm

```bash
npm install react-menujson
```

### yarn

```bash
yarn add react-menujson
```

### pnpm

```bash
pnpm add react-menujson
```

---

# Quick Start

```tsx
import { Menu } from "react-menujson";
import "react-menujson/styles.css";

const menuData = {
  Menu: [
    {
      Name: "Home",
      UrlIcon: "/icons/home.svg",
      Description: "Main page",
      SubMenu: [
        {
          Name: "Dashboard",
          UrlSite: "/dashboard",
        },
        {
          Name: "Reports",
          UrlIcon: "/icons/report.svg",
          ThirdMenu: [
            {
              Name: "Sales",
              UrlSite: "/reports/sales",
            },
            {
              Name: "Inventory",
              UrlSite: "/reports/inventory",
            },
          ],
        },
      ],
    },
    {
      Name: "Settings",
      UrlIcon: "/icons/settings.svg",
      Description: "Application settings",
    },
  ],
};

export default function App() {
  return <Menu data={menuData} />;
}
```

> **Important**
>
> Import the stylesheet once in your application:
>
> ```tsx
> import "react-menujson/styles.css";
> ```

---

# JSON Structure

```ts
interface MenuJSON {
  Menu: MenuItemData[];
}

interface MenuItemData {
  Name: string;
  UrlIcon?: string;
  Description?: string;
  SubMenu?: SubMenuItemData[];
}

interface SubMenuItemData {
  Name: string;
  UrlIcon?: string;
  UrlSite?: string;
  ThirdMenu?: ThirdMenuItemData[];
}

interface ThirdMenuItemData {
  Name: string;
  UrlIcon?: string;
  UrlSite?: string;
}
```

---

# Component Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| data | MenuJSON | — | **Required.** Menu JSON structure |
| multicolor | boolean | false | Applies a different color to each first-level item |
| backgroundColor | string | — | Fixed background color (ignored when `multicolor` is enabled) |
| showToggle | boolean | true | Shows the floating toggle button |
| className | string | — | Additional CSS class |
| minItemsPerRow | number | — | Minimum number of first-level items per row |
| maxItemWidth | number | 260 | Maximum width (px) for first-level items when `minItemsPerRow` is set |
| toggleColor | string | — | Background color of the floating toggle button |

---

# Examples

## Always visible menu

```tsx
<Menu
    data={menuData}
    showToggle={false}
/>
```

---

## Multicolor menu

```tsx
<Menu
    data={menuData}
    multicolor
/>
```

---

## Fixed background color

```tsx
<Menu
    data={menuData}
    backgroundColor="#0C231E"
/>
```

---

## Minimum columns

```tsx
<Menu
    data={menuData}
    minItemsPerRow={3}
    maxItemWidth={220}
/>
```

---

## Custom toggle button color

```tsx
<Menu
    data={menuData}
    toggleColor="#0C231E"
/>
```

---

# Exported Components

The package also exports internal components for advanced customization.

```tsx
import {
    Menu,
    MenuItem,
    SubMenu,
    SubMenuItem,
    ThirdMenu,
} from "react-menujson";
```

| Component | Description |
|------------|-------------|
| Menu | Root component |
| MenuItem | First-level item |
| SubMenu | Second-level container |
| SubMenuItem | Second-level item |
| ThirdMenu | Third-level container |

---

# CSS Customization

Every CSS class is prefixed with `rmj-` to avoid naming collisions.

Override the CSS variables after importing the library stylesheet.

```css
:root {
    --rmj-bg-color: #1B2631;
    --rmj-hover-color: #145A32;

    --rmj-submenu-bg-color: white;
    --rmj-submenu-hover-color: #e6e6e6;

    --rmj-third-menu-bg-color: #f5f5f5;

    --rmj-radius: 8px;
    --rmj-transition: .3s;
}
```

---

# Requirements

- React **18+**
- React DOM **18+**

---

# Browser Support

Compatible with all modern browsers:

- Chrome
- Edge
- Firefox
- Safari

---

# License

MIT

---

Made with ❤️ for the React community.