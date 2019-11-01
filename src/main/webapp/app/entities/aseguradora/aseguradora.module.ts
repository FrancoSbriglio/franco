import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  AseguradoraComponent,
  AseguradoraDetailComponent,
  AseguradoraUpdateComponent,
  AseguradoraDeletePopupComponent,
  AseguradoraDeleteDialogComponent,
  aseguradoraRoute,
  aseguradoraPopupRoute
} from './';

const ENTITY_STATES = [...aseguradoraRoute, ...aseguradoraPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    AseguradoraComponent,
    AseguradoraDetailComponent,
    AseguradoraUpdateComponent,
    AseguradoraDeleteDialogComponent,
    AseguradoraDeletePopupComponent
  ],
  entryComponents: [AseguradoraComponent, AseguradoraUpdateComponent, AseguradoraDeleteDialogComponent, AseguradoraDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoAseguradoraModule {}
