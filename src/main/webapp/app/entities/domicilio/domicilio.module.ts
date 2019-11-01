import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  DomicilioComponent,
  DomicilioDetailComponent,
  DomicilioUpdateComponent,
  DomicilioDeletePopupComponent,
  DomicilioDeleteDialogComponent,
  domicilioRoute,
  domicilioPopupRoute
} from './';

const ENTITY_STATES = [...domicilioRoute, ...domicilioPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    DomicilioComponent,
    DomicilioDetailComponent,
    DomicilioUpdateComponent,
    DomicilioDeleteDialogComponent,
    DomicilioDeletePopupComponent
  ],
  entryComponents: [DomicilioComponent, DomicilioUpdateComponent, DomicilioDeleteDialogComponent, DomicilioDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoDomicilioModule {}
