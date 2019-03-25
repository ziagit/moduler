import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouteModule, AdminRoutingComponents, AdminDialogComponents } from './admin-route.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/modules/shared.module';
import { AbookComponent } from './abook/abook.component';
import { AbookDialogComponent } from './dialogs/abook-dialog/abook-dialog.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { MatDatepickerModule } from '@angular/material';

@NgModule({
  imports: [
    MatDatepickerModule,
    MaterialModule,
    SharedModule,
    CommonModule,
    AdminRouteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AbookComponent,
    AdminRoutingComponents
  ],
  providers:[
    
  ],
  entryComponents: [
    AdminDialogComponents
  ]
})
export class AdminModule { }
