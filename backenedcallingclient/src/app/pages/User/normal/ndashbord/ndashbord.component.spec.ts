import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdashbordComponent } from './ndashbord.component';

describe('NdashbordComponent', () => {
  let component: NdashbordComponent;
  let fixture: ComponentFixture<NdashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
