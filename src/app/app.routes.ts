import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
//import { Livestatus } from './livestatus/livestatus';
import { Spacecraft } from './spacecraft/spacecraft';

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
                loadComponent:() =>
                    import ('./livestatus/livestatus')
                .then(c => c.Livestatus)
                    
                }
//   {path:"live", component: Livestatus}
            
];
