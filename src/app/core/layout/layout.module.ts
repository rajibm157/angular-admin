import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from '@common/header/header.component';
import { FooterComponent } from '@common/footer/footer.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class LayoutModule { }
