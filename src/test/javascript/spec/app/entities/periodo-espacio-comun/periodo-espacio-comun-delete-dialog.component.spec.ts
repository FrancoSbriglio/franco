/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { FrancoTestModule } from '../../../test.module';
import { PeriodoEspacioComunDeleteDialogComponent } from 'app/entities/periodo-espacio-comun/periodo-espacio-comun-delete-dialog.component';
import { PeriodoEspacioComunService } from 'app/entities/periodo-espacio-comun/periodo-espacio-comun.service';

describe('Component Tests', () => {
  describe('PeriodoEspacioComun Management Delete Component', () => {
    let comp: PeriodoEspacioComunDeleteDialogComponent;
    let fixture: ComponentFixture<PeriodoEspacioComunDeleteDialogComponent>;
    let service: PeriodoEspacioComunService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FrancoTestModule],
        declarations: [PeriodoEspacioComunDeleteDialogComponent]
      })
        .overrideTemplate(PeriodoEspacioComunDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PeriodoEspacioComunDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PeriodoEspacioComunService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
