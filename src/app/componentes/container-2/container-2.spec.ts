import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Container2 } from './container-2';

describe('Container2', () => {
  let component: Container2;
  let fixture: ComponentFixture<Container2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Container2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Container2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
