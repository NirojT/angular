import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsidebarComponent } from './nsidebar.component';

describe('NsidebarComponent', () => {
  let component: NsidebarComponent;
  let fixture: ComponentFixture<NsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
