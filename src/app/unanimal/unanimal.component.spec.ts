import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnanimalComponent } from './unanimal.component';

describe('UnanimalComponent', () => {
  let component: UnanimalComponent;
  let fixture: ComponentFixture<UnanimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnanimalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
