import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  ArtComponent,
  ArtDetailComponent,
  ArtUpdateComponent,
  ArtDeletePopupComponent,
  ArtDeleteDialogComponent,
  artRoute,
  artPopupRoute
} from './';

const ENTITY_STATES = [...artRoute, ...artPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [ArtComponent, ArtDetailComponent, ArtUpdateComponent, ArtDeleteDialogComponent, ArtDeletePopupComponent],
  entryComponents: [ArtComponent, ArtUpdateComponent, ArtDeleteDialogComponent, ArtDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoArtModule {}
