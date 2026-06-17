class AdminPage {

    constructor(page) {

        this.page = page;

        this.adminMenu =
            page.getByRole('link', { name: 'Admin' });

        this.addButton =
            page.getByRole('button', { name: /Add/i });

        this.saveButton =
            page.getByRole('button', { name: 'Save' });

    }

    async navigateToAdmin() {

        await this.adminMenu.click();

    }

    async clickAdd() {

        await this.addButton.click();

    }

    async addUser(username, password) {

        // User Role
        await this.page.locator('.oxd-select-text').first().click();

        await this.page
            .getByRole('option', { name: 'ESS' })
            .click();

        // Employee Name
        const employeeInput =
            this.page.getByPlaceholder('Type for hints...');

        await employeeInput.click();

        await employeeInput.pressSequentially('Ad', {
            delay: 150
        });

        await this.page.waitForTimeout(2000);

        await this.page
            .locator('.oxd-autocomplete-option')
            .first()
            .click();

        // Status
        await this.page.locator('.oxd-select-text').last().click();

        await this.page
            .getByRole('option', { name: 'Enabled' })
            .click();

        // Username
        await this.page
            .getByRole('textbox')
            .nth(2)
            .fill(username);

        // Password
        await this.page
            .getByRole('textbox')
            .nth(3)
            .fill(password);

        // Confirm Password
        await this.page
            .getByRole('textbox')
            .nth(4)
            .fill(password);

        await this.saveButton.click();

    }

    async searchUser(username) {

        await this.page
            .locator('input.oxd-input')
            .nth(1)
            .clear();

        await this.page
            .locator('input.oxd-input')
            .nth(1)
            .fill(username);

        await this.page
            .getByRole('button', { name: 'Search' })
            .click();

        await this.page.waitForTimeout(2000);

    }

    async editUser() {

    await this.page.locator('.bi-pencil-fill').first().click();

    await this.page.locator('.oxd-select-text').nth(1).click();

    await this.page.getByRole('option', {
        name: 'Disabled'
    }).click();

    await this.saveButton.click();

}

    async deleteUser() {

    await this.page.locator('.bi-trash').first().click();

    await this.page.getByRole('button', {
        name: 'Yes, Delete'
    }).click();

}

}

module.exports = AdminPage;