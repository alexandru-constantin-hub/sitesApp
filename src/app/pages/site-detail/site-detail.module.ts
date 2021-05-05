import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteDetailPageRoutingModule } from './site-detail-routing.module';

import { SiteDetailPage } from './site-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteDetailPageRoutingModule
  ],
  declarations: [SiteDetailPage]
})
export class SiteDetailPageModule {}
