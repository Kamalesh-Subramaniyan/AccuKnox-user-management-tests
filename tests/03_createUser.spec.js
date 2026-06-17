const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const AdminPage = require('../pages/AdminPage');

const userData = require('../test-data/userData');

test('Create User', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);

    await loginPage.navigate();

    await loginPage.login(
        'Admin',
        'admin123'
    );

    await adminPage.navigateToAdmin();

    await adminPage.clickAdd();

    await adminPage.addUser(
        userData.username,
        userData.password
    );

    await expect(page).toHaveURL(/viewSystemUsers/);

});