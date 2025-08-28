import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPrincipal } from './container-principal';

describe('ContainerPrincipal', () => {
  let component: ContainerPrincipal;
  let fixture: ComponentFixture<ContainerPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
