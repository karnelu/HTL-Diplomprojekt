import { async, TestBed } from '@angular/core/testing';
import { GeschaeftspartnerComponent } from './geschaeftspartner.component';
describe('GeschaeftspartnerComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GeschaeftspartnerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GeschaeftspartnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=geschaeftspartner.component.spec.js.map