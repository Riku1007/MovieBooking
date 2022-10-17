import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScreenComponent } from './movie-screen.component';

describe('MovieScreenComponent', () => {
  let component: MovieScreenComponent;
  let fixture: ComponentFixture<MovieScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
