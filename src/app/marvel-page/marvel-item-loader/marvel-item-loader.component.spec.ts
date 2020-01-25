import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelItemLoaderComponent } from './marvel-item-loader.component';

describe('MarvelItemLoaderComponent', () => {
  let component: MarvelItemLoaderComponent;
  let fixture: ComponentFixture<MarvelItemLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelItemLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelItemLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
