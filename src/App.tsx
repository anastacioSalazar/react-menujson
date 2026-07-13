import { Menu } from './index'; // Import from your own source code, not the published package
import './Menu.css';

const menuData = {
  Menu: [
    {
      Name: 'Home',
      UrlIcon: 'https://res.cloudinary.com/lrtdmkhj/image/upload/v1783626494/1_yij70u.png',
      Description: 'Main test page',
      SubMenu: [
        { Name: 'Dashboard', UrlSite: '/dashboard' },
        {
          Name: 'Reports',
          UrlIcon: 'https://res.cloudinary.com/lrtdmkhj/image/upload/v1783626494/3_sbmeik.png',
          ThirdMenu: [
            { Name: 'Sales', UrlSite: '/reports/sales' },
            { Name: 'Inventory', UrlSite: '/reports/inventory' },
          ],
        },
      ],
    },
    {
      Name: 'Settings',
      UrlIcon: 'https://res.cloudinary.com/lrtdmkhj/image/upload/v1783626494/2_px9y5i.png',
      Description: 'System settings',
    },
  ],
};

function App() {
  // return <Menu data={menuData} multicolor minItemsPerRow={2}/>;
  // return <Menu data={menuData} multicolor/>;
  // return <Menu data={menuData} backgroundColor='#00FFFF'/>;
  return <Menu data={menuData} multicolor toggleColor='#A52A2A'/>;
}

export default App;