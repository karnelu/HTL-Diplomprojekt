import { async, TestBed } from '@angular/core/testing';
import { FahrzeugDetailComponent } from './fahrzeug-detail.component';
describe('FahrzeugDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FahrzeugDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FahrzeugDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=fahrzeug-detail.component.spec.js.map