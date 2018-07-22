import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestBookListComponent } from './best-book-list.component';

describe('BestBookListComponent', () => {
  let component: BestBookListComponent;
  let fixture: ComponentFixture<BestBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
