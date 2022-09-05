import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { SidebarComponent } from '@common/sidebar/sidebar.component';
import { FooterComponent } from '@common/footer/footer.component';
import { MaterialModule } from '@shared/material.module';

@NgModule({
  declarations: [
    DefaultComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class LayoutModule { }
