class PimPage {

    constructor(page) {

        this.page = page;

        this.pimMenu =
            page.getByRole('link', { name: 'PIM' });

        this.addButton =
            page.getByRole('button', { name: /Add/i });

        this.saveButton =
            page.getByRole('button', { name: 'Save' });

    }

    async navigateToPIM() {

        await this.pimMenu.click();

    }

 async addEmployee(firstName, lastName) {

    await this.addButton.click();

    await this.page.waitForURL(/addEmployee/);

    await this.page.getByPlaceholder('First Name')
        .fill(firstName);

    await this.page.getByPlaceholder('Last Name')
        .fill(lastName);

    await this.saveButton.click();
}

}

module.exports = PimPage;