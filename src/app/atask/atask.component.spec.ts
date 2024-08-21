import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaskComponent } from './atask.component';

describe('AtaskComponent', () => {
  let component: AtaskComponent;
  let fixture: ComponentFixture<AtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
