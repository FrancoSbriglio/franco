import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  CarnetDeConducirComponent,
  CarnetDeConducirDetailComponent,
  CarnetDeConducirUpdateComponent,
  CarnetDeConducirDeletePopupComponent,
  CarnetDeConducirDeleteDialogComponent,
  carnetDeConducirRoute,
  carnetDeConducirPopupRoute
} from './';

const ENTITY_STATES = [...carnetDeConducirRoute, ...carnetDeConducirPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CarnetDeConducirComponent,
    CarnetDeConducirDetailComponent,
    CarnetDeConducirUpdateComponent,
    CarnetDeConducirDeleteDialogComponent,
    CarnetDeConducirDeletePopupComponent
  ],
  entryComponents: [
    CarnetDeConducirComponent,
    CarnetDeConducirUpdateComponent,
    CarnetDeConducirDeleteDialogComponent,
    CarnetDeConducirDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoCarnetDeConducirModule {}
