import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGessingGame } from './number-gessing-game';
import { render, screen } from '@testing-library/angular';

describe('NumberGessingGame', () => {
  it('should create', () => {
    expect(NumberGessingGame).toBeTruthy();
  });
  it('should contain text in headline', async () => {
    await render(NumberGessingGame);
    expect(screen.findAllByText('Zahlen erraten')).toBeTruthy();
  });
  it('should contain text in the description', async () => {
    await render(NumberGessingGame);
    expect(screen.findAllByText('Versuche die Zahl zwischen 0 und 100 zu erraten')).toBeTruthy();
  });
  it('should contain text the label', async () => {
    await render(NumberGessingGame);
    expect(screen.findAllByText('Hier kannst du sagen welche Zahl du raten willst.')).toBeTruthy();
  });
});
