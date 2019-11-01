import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'norma-barrio',
        loadChildren: () => import('./norma-barrio/norma-barrio.module').then(m => m.FrancoNormaBarrioModule)
      },
      {
        path: 'barrio',
        loadChildren: () => import('./barrio/barrio.module').then(m => m.FrancoBarrioModule)
      },
      {
        path: 'estado-persona',
        loadChildren: () => import('./estado-persona/estado-persona.module').then(m => m.FrancoEstadoPersonaModule)
      },
      {
        path: 'persona',
        loadChildren: () => import('./persona/persona.module').then(m => m.FrancoPersonaModule)
      },
      {
        path: 'domicilio',
        loadChildren: () => import('./domicilio/domicilio.module').then(m => m.FrancoDomicilioModule)
      },
      {
        path: 'lista-amigos',
        loadChildren: () => import('./lista-amigos/lista-amigos.module').then(m => m.FrancoListaAmigosModule)
      },
      {
        path: 'espacio-comun',
        loadChildren: () => import('./espacio-comun/espacio-comun.module').then(m => m.FrancoEspacioComunModule)
      },
      {
        path: 'periodo-espacio-comun',
        loadChildren: () => import('./periodo-espacio-comun/periodo-espacio-comun.module').then(m => m.FrancoPeriodoEspacioComunModule)
      },
      {
        path: 'carnet-de-conducir',
        loadChildren: () => import('./carnet-de-conducir/carnet-de-conducir.module').then(m => m.FrancoCarnetDeConducirModule)
      },
      {
        path: 'planilla-ingreso-egreso',
        loadChildren: () =>
          import('./planilla-ingreso-egreso/planilla-ingreso-egreso.module').then(m => m.FrancoPlanillaIngresoEgresoModule)
      },
      {
        path: 'qr',
        loadChildren: () => import('./qr/qr.module').then(m => m.FrancoQRModule)
      },
      {
        path: 'reporte',
        loadChildren: () => import('./reporte/reporte.module').then(m => m.FrancoReporteModule)
      },
      {
        path: 'evento',
        loadChildren: () => import('./evento/evento.module').then(m => m.FrancoEventoModule)
      },
      {
        path: 'detalle-evento',
        loadChildren: () => import('./detalle-evento/detalle-evento.module').then(m => m.FrancoDetalleEventoModule)
      },
      {
        path: 'estado-evento',
        loadChildren: () => import('./estado-evento/estado-evento.module').then(m => m.FrancoEstadoEventoModule)
      },
      {
        path: 'vehiculo',
        loadChildren: () => import('./vehiculo/vehiculo.module').then(m => m.FrancoVehiculoModule)
      },
      {
        path: 'color',
        loadChildren: () => import('./color/color.module').then(m => m.FrancoColorModule)
      },
      {
        path: 'seguro',
        loadChildren: () => import('./seguro/seguro.module').then(m => m.FrancoSeguroModule)
      },
      {
        path: 'aseguradora',
        loadChildren: () => import('./aseguradora/aseguradora.module').then(m => m.FrancoAseguradoraModule)
      },
      {
        path: 'marca',
        loadChildren: () => import('./marca/marca.module').then(m => m.FrancoMarcaModule)
      },
      {
        path: 'modelo',
        loadChildren: () => import('./modelo/modelo.module').then(m => m.FrancoModeloModule)
      },
      {
        path: 'art',
        loadChildren: () => import('./art/art.module').then(m => m.FrancoArtModule)
      },
      {
        path: 'mensaje',
        loadChildren: () => import('./mensaje/mensaje.module').then(m => m.FrancoMensajeModule)
      },
      {
        path: 'empresa',
        loadChildren: () => import('./empresa/empresa.module').then(m => m.FrancoEmpresaModule)
      },
      {
        path: 'novedades',
        loadChildren: () => import('./novedades/novedades.module').then(m => m.FrancoNovedadesModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoEntityModule {}
