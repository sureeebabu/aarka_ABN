import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MembersdetailsPageRoutingModule } from './membersdetails-routing.module';
import { MembersdetailsPage } from './membersdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MembersdetailsPageRoutingModule
  ],
  declarations: [MembersdetailsPage]
})
export class MembersdetailsPageModule {}
