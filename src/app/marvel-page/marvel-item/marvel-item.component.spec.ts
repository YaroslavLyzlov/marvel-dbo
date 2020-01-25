import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelItemComponent } from './marvel-item.component';

describe('MarvelItemComponent', () => {
  let component: MarvelItemComponent;
  let fixture: ComponentFixture<MarvelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
