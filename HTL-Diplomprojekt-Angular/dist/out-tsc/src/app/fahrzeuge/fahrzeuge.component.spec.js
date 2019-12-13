import { async, TestBed } from '@angular/core/testing';
import { FahrzeugeComponent } from './fahrzeuge.component';
describe('FahrzeugeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FahrzeugeComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FahrzeugeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=fahrzeuge.component.spec.js.map