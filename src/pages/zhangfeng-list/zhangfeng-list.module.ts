import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZhangfengList } from './zhangfeng-list';

@NgModule({
  declarations: [
    ZhangfengList,
  ],
  imports: [
    IonicPageModule.forChild(ZhangfengList),
  ],
  exports: [
    ZhangfengList
  ]
})
export class ZhangfengListModule {

}
