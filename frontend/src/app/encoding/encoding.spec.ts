import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encoding } from './encoding';

describe('Encoding', () => {
  let component: Encoding;
  let fixture: ComponentFixture<Encoding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encoding],
    }).compileComponents();

    fixture = TestBed.createComponent(Encoding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
