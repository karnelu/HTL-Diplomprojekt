import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarFullscreenDialogComponent } from './toolbar-fullscreen-dialog.component';

describe('ToolbarFullscreenDialogComponent', () => {
  let component: ToolbarFullscreenDialogComponent;
  let fixture: ComponentFixture<ToolbarFullscreenDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarFullscreenDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarFullscreenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
