import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkTabComponent } from './homework-tab.component';

describe('HomeworkTabComponent', () => {
  let component: HomeworkTabComponent;
  let fixture: ComponentFixture<HomeworkTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
