import { async, TestBed } from '@angular/core/testing';
import { FahrzeugeDetailComponent } from './fahrzeuge-detail.component';
describe('FahrzeugeDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FahrzeugeDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FahrzeugeDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=fahrzeuge-detail.component.spec.js.map