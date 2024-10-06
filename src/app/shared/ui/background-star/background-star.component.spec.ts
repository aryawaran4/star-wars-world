import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundStarComponent } from './background-star.component';

describe('BackgroundStarComponent', () => {
  let component: BackgroundStarComponent;
  let fixture: ComponentFixture<BackgroundStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundStarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
