import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermissionsComponent } from './usermissions.component';

describe('UsermissionsComponent', () => {
  let component: UsermissionsComponent;
  let fixture: ComponentFixture<UsermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
