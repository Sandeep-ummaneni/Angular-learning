import { Routes } from '@angular/router';

import { Imagecomponent } from './imagecomponent/imagecomponent';
//import { HeaderComponent } from './header/header';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    { path: '', component: Dashboard },   // default page
//   { path: 'image', component: Imagecomponent }
];
