import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sites',
    pathMatch: 'full'
  },
  {
    path: 'sites',
    loadChildren: () => import('./pages/sites/sites.module').then( m => m.SitesPageModule)
  },
  {
    path: 'site-detail/:id',
    loadChildren: () => import('./pages/site-detail/site-detail.module').then( m => m.SiteDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
