import signup from '../pages/SignupPage';

describe('home page', () => {
  it('app deve estar online', () => {
    signup.go();
    cy.get('#page-home main h1').should(
      'have.text',
      'Seja um parceiro entregador pela Buger Eats',
    );
  });
});
