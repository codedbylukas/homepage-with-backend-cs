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
  it('should create shopping list link text', async () => {
    await render(NumberGessingGame);
    expect(screen.findAllByText('Einkaufsliste')).toBeTruthy();
  });
});
