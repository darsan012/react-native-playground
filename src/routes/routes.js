import Homescreen from '../screen/Homescreen';
import Buttonscreen from '../screen/Buttonscreen';
import Textscreen from '../screen/Textscreen';

const screens = [
  {
    name: 'Home',
    component: Homescreen,
    showHeader: false,
  },
  {
    name: 'Button',
    component: Buttonscreen,
    showHeader: false,
  },
  {
    name: 'Text',
    component: Textscreen,
    showHeader: false,
  },
];

export default screens;
