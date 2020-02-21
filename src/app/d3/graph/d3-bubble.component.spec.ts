import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BubbleComponent } from './d3-bubble.component';

describe('D3GraphComponent', () => {
  let component: D3BubbleComponent;
  let fixture: ComponentFixture<D3BubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3BubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
