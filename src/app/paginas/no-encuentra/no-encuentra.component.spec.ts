import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEncuentraComponent } from './no-encuentra.component';

describe('NoEncuentraComponent', () => {
  let component: NoEncuentraComponent;
  let fixture: ComponentFixture<NoEncuentraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEncuentraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoEncuentraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
