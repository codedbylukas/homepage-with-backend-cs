import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGessingGame } from './number-gessing-game';

describe('NumberGessingGame', () => {
  let component: NumberGessingGame;
  let fixture: ComponentFixture<NumberGessingGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberGessingGame],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberGessingGame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
