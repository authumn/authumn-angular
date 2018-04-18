import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthumnAngularComponent } from './authumn-angular.component';

describe('AuthumnAngularComponent', () => {
  let component: AuthumnAngularComponent;
  let fixture: ComponentFixture<AuthumnAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthumnAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthumnAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
