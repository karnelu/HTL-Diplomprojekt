import { async, TestBed } from '@angular/core/testing';
import { GeschaeftspartnerDetailComponent } from './geschaeftspartner-detail.component';
describe('GeschaeftspartnerDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GeschaeftspartnerDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GeschaeftspartnerDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=geschaeftspartner-detail.component.spec.js.map