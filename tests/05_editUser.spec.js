const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const AdminPage = require('../pages/AdminPage');
const userData = require('../test-data/userData');

test('Edit User', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);

    await loginPage.navigate();

    await loginPage.login(
        'Admin',
        'admin123'
    );

    await adminPage.navigateToAdmin();

    await adminPage.searchUser(userData.username);

    await adminPage.editUser();

    await expect(page.locator('body'))
        .toContainText('Successfully Updated');

});