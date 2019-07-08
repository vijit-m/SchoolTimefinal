import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploadphotoPage } from './uploadphoto.page';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

const routes: Routes = [
  {
    path: '',
    component: UploadphotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
// tslint:disable-next-line: deprecation
    HttpModule,

  ],
  declarations: [UploadphotoPage]
})
export class UploadphotoPageModule {}
