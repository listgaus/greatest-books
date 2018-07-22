import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSpinnerItemComponent } from './book-spinner-item.component';

describe('BookSpinnerItemComponent', () => {
  let component: BookSpinnerItemComponent;
  let fixture: ComponentFixture<BookSpinnerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSpinnerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSpinnerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
