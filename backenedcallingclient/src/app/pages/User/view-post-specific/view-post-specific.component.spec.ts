import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostSPecificComponent } from './view-post-specific.component';

describe('ViewPostSPecificComponent', () => {
  let component: ViewPostSPecificComponent;
  let fixture: ComponentFixture<ViewPostSPecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPostSPecificComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPostSPecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
