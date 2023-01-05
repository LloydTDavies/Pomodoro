import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('Function: isLongBreak', () => {
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(() => {
      fixture =TestBed.createComponent(AppComponent);
    })

    it('should return true if devisable by 4', () => {
      fixture.componentInstance.rounds = 4;
      expect(fixture.componentInstance.isLongBreak()).toBeTrue();
    })
    it('should return true if devisable by 4', () => {
      fixture.componentInstance.rounds = 8;
      expect(fixture.componentInstance.isLongBreak()).toBeTrue();
    })
    it('should return false if not devisable by 4', () => {
      fixture.componentInstance.rounds = 1;
      expect(fixture.componentInstance.isLongBreak()).toBeFalse();
    })
  })
});
