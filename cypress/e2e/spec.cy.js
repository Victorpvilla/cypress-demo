describe('Make multiple searches in google', () => {
  beforeEach(() => {

    cy.clearCookies();
    cy.clearLocalStorage();

  })

  afterEach(() => {

    cy.clearCookies();

  })  

 
  it('SimpleSearch: make a simple search on google ', () => {
    cy.visit('/');
    cy.get('div > input[title=Buscar]' ,{timeout:120000}).type('Perritos');
  })
})