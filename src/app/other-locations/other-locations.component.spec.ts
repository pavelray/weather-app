import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLocationsComponent } from './other-locations.component';

describe('OtherLocationsComponent', () => {
  let component: OtherLocationsComponent;
  let fixture: ComponentFixture<OtherLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
