import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserauthoritiesComponent } from './userauthorities.component';

describe('UserauthoritiesComponent', () => {
  let component: UserauthoritiesComponent;
  let fixture: ComponentFixture<UserauthoritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserauthoritiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserauthoritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
