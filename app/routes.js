import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import SideMenu from './SideMenu/SideMenu';
import {createDrawerNavigator} from 'react-navigation';

export default createDrawerNavigator({
  Page1: {
    screen: Page1
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});
