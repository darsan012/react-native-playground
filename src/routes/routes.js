import Homescreen from '../screen/Homescreen';
import Buttonscreen from '../screen/Buttonscreen';
import Textscreen from '../screen/Textscreen';
import Alertscreen from '../screen/Alertscreen';
import Avatarscreen from '../screen/Avatarscreen';
import Dividerscreen from '../screen/Dividerscreen';
import Flatscreen from '../screen/FlatListscreen';
import Imagescreen from '../screen/Imagescreen';
import Switchscreen from '../screen/Switchscreen';
import Inputscreen from '../screen/Inputscreen';
import Toastscreen from '../screen/Toastscreen';

const screens = [
  {
    name: 'Home',
    component: Homescreen,
    showHeader: false,
  },
  {
    name: 'Avatar',
    component: Avatarscreen,
    showHeader: false,
  },
  {
    name: 'Alert',
    component: Alertscreen,
    showHeader: false,
  },
  {
    name: 'Button',
    component: Buttonscreen,
    showHeader: false,
  },
  {
    name: 'Divider',
    component: Dividerscreen,
    showHeader: false,
  },
  {
    name: 'FlatList',
    component: Flatscreen,
    showHeader: false,
  },
  {
    name: 'Image',
    component: Imagescreen,
    showHeader: false,
  },
  {
    name: 'Switch',
    component: Switchscreen,
    showHeader: false,
  },
  {
    name: 'Input',
    component: Inputscreen,
    showHeader: false,
  },
  {
    name: 'Toast',
    component: Toastscreen,
    showHeader: false,
  },
  {
    name: 'Text',
    component: Textscreen,
    showHeader: false,
  },
];

export default screens;
