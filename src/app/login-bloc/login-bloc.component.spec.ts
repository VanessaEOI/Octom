import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBlocComponent } from './login-bloc.component';

describe('LoginBlocComponent', () => {
  let component: LoginBlocComponent;
  let fixture: ComponentFixture<LoginBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
