Feature('login');

Scenario('Acessop ao google', ({ I }) => {
    I.amOnPage('http://www.google.com')
    I.seeInTitle('Google')
});
