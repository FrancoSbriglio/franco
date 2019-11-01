import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  EstadoPersonaComponent,
  EstadoPersonaDetailComponent,
  EstadoPersonaUpdateComponent,
  EstadoPersonaDeletePopupComponent,
  EstadoPersonaDeleteDialogComponent,
  estadoPersonaRoute,
  estadoPersonaPopupRoute
} from './';

const ENTITY_STATES = [...estadoPersonaRoute, ...estadoPersonaPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    EstadoPersonaComponent,
    EstadoPersonaDetailComponent,
    EstadoPersonaUpdateComponent,
    EstadoPersonaDeleteDialogComponent,
    EstadoPersonaDeletePopupComponent
  ],
  entryComponents: [
    EstadoPersonaComponent,
    EstadoPersonaUpdateComponent,
    EstadoPersonaDeleteDialogComponent,
    EstadoPersonaDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoEstadoPersonaModule {}
