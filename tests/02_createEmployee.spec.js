const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const PimPage = require('../pages/PimPage');

test('Create Employee', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const pimPage = new PimPage(page);

    await loginPage.navigate();

    await loginPage.login(
        'Admin',
        'admin123'
    );

    await pimPage.navigateToPIM();

    await pimPage.addEmployee(
        'AdminAuto',
        'QA'
    );

    await expect(page).toHaveURL(/viewPersonalDetails/);

});