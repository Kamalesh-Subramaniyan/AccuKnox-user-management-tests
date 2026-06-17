const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const AdminPage = require('../pages/AdminPage');
const userData = require('../test-data/userData');

test('Verify Deleted User', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);

    await loginPage.navigate();

    await loginPage.login(
        'Admin',
        'admin123'
    );

    await adminPage.navigateToAdmin();

    await adminPage.searchUser(userData.username);

await expect(page.locator('text=No Records Found').first()).toBeVisible();

});
