import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChangepwdPageRoutingModule } from './changepwd-routing.module';
import { ChangepwdPage } from './changepwd.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ChangepwdPageRoutingModule
  ],
  declarations: [ChangepwdPage]
})
export class ChangepwdPageModule {}
