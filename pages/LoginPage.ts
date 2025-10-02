import { Page , expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{

    constructor(page: Page) {
        super(page);
    }

    async enterUsername(username: string) {
        await this.page.fill('//input[@name="user-name"]', username);
    }

    async enterPassword(password: string) {
        await this.page.fill('//input[@name="password"]', password);
    }

    async clickLogin() {
        await this.page.click('//input[@name="login-button"]');
    }

    async assertHomepage() {
        await expect(this.page.locator('//span[text()="Products"]')).toBeVisible({timeout: 7000});
    }

    async getErrorMessage() {
    return this.page.locator('//h3[@data-test="error"]').textContent();
  }
    
}