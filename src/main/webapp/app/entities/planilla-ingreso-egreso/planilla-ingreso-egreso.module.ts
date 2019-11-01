import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  PlanillaIngresoEgresoComponent,
  PlanillaIngresoEgresoDetailComponent,
  PlanillaIngresoEgresoUpdateComponent,
  PlanillaIngresoEgresoDeletePopupComponent,
  PlanillaIngresoEgresoDeleteDialogComponent,
  planillaIngresoEgresoRoute,
  planillaIngresoEgresoPopupRoute
} from './';

const ENTITY_STATES = [...planillaIngresoEgresoRoute, ...planillaIngresoEgresoPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    PlanillaIngresoEgresoComponent,
    PlanillaIngresoEgresoDetailComponent,
    PlanillaIngresoEgresoUpdateComponent,
    PlanillaIngresoEgresoDeleteDialogComponent,
    PlanillaIngresoEgresoDeletePopupComponent
  ],
  entryComponents: [
    PlanillaIngresoEgresoComponent,
    PlanillaIngresoEgresoUpdateComponent,
    PlanillaIngresoEgresoDeleteDialogComponent,
    PlanillaIngresoEgresoDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoPlanillaIngresoEgresoModule {}
