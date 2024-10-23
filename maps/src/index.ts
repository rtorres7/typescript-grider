import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

console.log('hello there');

// create instance of class
const customMap = new CustomMap();
const user = new User();
const company = new Company();

customMap.initMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
