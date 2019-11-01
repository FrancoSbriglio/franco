import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  BarrioComponent,
  BarrioDetailComponent,
  BarrioUpdateComponent,
  BarrioDeletePopupComponent,
  BarrioDeleteDialogComponent,
  barrioRoute,
  barrioPopupRoute
} from './';

const ENTITY_STATES = [...barrioRoute, ...barrioPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [BarrioComponent, BarrioDetailComponent, BarrioUpdateComponent, BarrioDeleteDialogComponent, BarrioDeletePopupComponent],
  entryComponents: [BarrioComponent, BarrioUpdateComponent, BarrioDeleteDialogComponent, BarrioDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoBarrioModule {}
