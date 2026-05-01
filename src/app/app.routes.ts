import { Routes } from '@angular/router';

import { Imagecomponent } from './imagecomponent/imagecomponent';
//import { HeaderComponent } from './header/header';
import { Dashboard } from './dashboard/dashboard';
import { Newscomponent } from './newscomponent/newscomponent';

export const routes: Routes = [
    { path: '', component: Dashboard },   
    { path: 'image', component: Imagecomponent },
    {path: 'news/:id', component: Newscomponent}
];
