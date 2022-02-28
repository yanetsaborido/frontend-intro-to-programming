import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShoppingContainerComponent } from './components/shopping-container/shopping-container.component';

const routes: Routes = [
  {
    path: 'shopping',
    component: ShoppingContainerComponent
    },
    {
    path: 'dashboard',
    component: DashboardComponent
    },
    {
    path: '**', //is the path is none of the specified, go to the default, ie dashboard
    redirectTo: 'dashboard'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
