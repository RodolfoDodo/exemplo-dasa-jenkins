Feature('login');

Scenario('test something', ({ I }) => {
    I.amOnPage('http://www.google.com')
    I.seeInTitle('Google 01')
});
