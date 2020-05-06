import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersdetailsPageRoutingModule } from './membersdetails-routing.module';

import { MembersdetailsPage } from './membersdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersdetailsPageRoutingModule
  ],
  declarations: [MembersdetailsPage]
})
export class MembersdetailsPageModule {}
