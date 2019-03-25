import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SettingComponent } from '../public/setting/setting.component';
import { AbookComponent } from './abook/abook.component';
import { AbookDialogComponent } from './dialogs/abook-dialog/abook-dialog.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard'},
  { path: 'dashboard', component: AdminDashboardComponent},
  { path: 'book', component: AbookComponent},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AdminRouteModule { }
export const AdminRoutingComponents = [
  AdminDashboardComponent,
  SettingComponent,
  AbookDialogComponent
];
export const AdminDialogComponents = [
  AbookDialogComponent
]