import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubrayadoComponent } from './subrayado.component';

describe('SubrayadoComponent', () => {
  let component: SubrayadoComponent;
  let fixture: ComponentFixture<SubrayadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubrayadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubrayadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
