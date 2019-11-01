import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FrancoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FrancoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FrancoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoSharedModule {
  static forRoot() {
    return {
      ngModule: FrancoSharedModule
    };
  }
}
