import { render, screen } from '@testing-library/angular';
import { NumberGessingGame } from './number-gessing-game';

describe('NumberGessingGame', () => {
  it('should create', async () => {
    const { fixture } = await render(NumberGessingGame);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('defined function load new number', async () => {
    const { fixture } = await render(NumberGessingGame);
    const component = fixture.componentInstance;
    expect(component.loadNewNumber).toBeDefined();
  });
  it('defined function check guess', async () => {
    const { fixture } = await render(NumberGessingGame);
    const component = fixture.componentInstance;
    expect(component.checkGuess).toBeDefined();
  });
  it('defined function reset game', async () => {
    const { fixture } = await render(NumberGessingGame);
    const component = fixture.componentInstance;
    expect(component.resetGame).toBeDefined();
  });
  it('should create Zahlen erraten text', async () => {
    await render(NumberGessingGame);
    expect(screen.getByText('Zahlen erraten')).toBeTruthy();
  });
  it('should create gessing text', async () => {
    await render(NumberGessingGame);
    expect(screen.getByText('Versuche die Zahl zwischen 0 und 100 zu erraten')).toBeTruthy();
  });
  it('should create guess button test', async () => {
    await render(NumberGessingGame);
    expect(screen.getByText('Guess')).toBeTruthy();
  });
});
