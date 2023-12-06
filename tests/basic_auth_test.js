/// <reference types='codeceptjs' />

Feature('Login Authentication');

Scenario('User Login', async (I) => {
    I.amOnPage('http://localhost:3000');
    I.see('Demo App', 'h4');
    I.fillField('Username', 'demo');
    I.fillField('Password', 'demo');
    I.click('Log In');
});
