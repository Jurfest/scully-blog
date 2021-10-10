import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';

/*  Home Module  */

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
