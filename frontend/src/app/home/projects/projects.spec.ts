import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects } from './projects';
import { render, screen } from '@testing-library/angular';

describe('Projects', () => {
  it('should create', () => {
    expect(Projects).toBeTruthy();
  });
  it('should create number gessing game text', async () => {
    await render(Projects);
    expect(screen.getByText('Zahl erraten game')).toBeTruthy();
  });
  it('should create shopping list link text', async () => {
    await render(Projects);
    expect(screen.getByText('Einkaufsliste')).toBeTruthy();
  });
});
