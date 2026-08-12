import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
//import { Livestatus } from './livestatus/livestatus';
import { Spacecraft } from './spacecraft/spacecraft';
import { VoyagerDistance } from './voyager-distance/voyager-distance';

import { authGuard } from './guards/auth.guard';
import { pendingChangesGuard } from './guards/pending-changes.guard';

export const routes: Routes = [
    { path: '', component: Dashboard ,
        children : [
            { path: '', component: Spacecraft }
        ]

    },  
    { 
    path: 'image',
  loadComponent: () =>
    import('./imagecomponent/imagecomponent')
      .then(c => c.Imagecomponent)
},
    {
        path: 'news/:id',
        loadComponent:() =>
            import('./newscomponent/newscomponent')
                .then(c => c.Newscomponent)
            },
            {path: 'live',
                                canActivate: [authGuard],
                loadComponent:() =>
                    import ('./livestatus/livestatus')
                .then(c => c.Livestatus)
                    
                },
    {path:"distance", component: VoyagerDistance},
    {
        path: 'security',
        canDeactivate: [pendingChangesGuard],
        loadComponent: () =>
            import('./security/security')
                .then((c) => c.SecurityComponent)
    }
            
];
