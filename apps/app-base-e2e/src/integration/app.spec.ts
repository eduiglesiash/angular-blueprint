import { getGreeting } from '../support/app.po';

describe('app-base', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to app-base!');
  });
});
