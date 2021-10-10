import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';

// TODO: - Create simple guard and add canActivate

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  { path: 'contact', component: ContactComponent },
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  {
    path: '**',
    redirectTo: 'contact'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
