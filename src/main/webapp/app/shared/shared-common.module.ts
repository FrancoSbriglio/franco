import { NgModule } from '@angular/core';

import { FrancoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [FrancoSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [FrancoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FrancoSharedCommonModule {}
