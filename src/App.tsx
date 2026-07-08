import { Menu } from './index'; // importa desde tu propio código fuente, no del paquete publicado
import './Menu.css';

const menuData = {
  Menu: [
    {
      Name: 'Inicio',
      UrlIcon: '/favicon.svg',
      Description: 'Página principal de prueba',
      SubMenu: [
        { Name: 'Dashboard', UrlSite: '/dashboard' },
        {
          Name: 'Reportes',
          UrlIcon: '/chromecast.png',
          ThirdMenu: [
            { Name: 'Ventas', UrlSite: '/reportes/ventas' },
            { Name: 'Inventario', UrlSite: '/reportes/inventario' },
          ],
        },
      ],
    },
    {
      Name: 'Configuración',
      UrlIcon: '/star.png',
      Description: 'Ajustes del sistema',
    },
  ],
};

function App() {
 // return <Menu data={menuData} multicolor minItemsPerRow={2}/>;
//  return <Menu data={menuData} multicolor/>;
  return <Menu data={menuData} backgroundColor='#00FFFF'/>;
}

export default App;