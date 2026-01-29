import { Page, Locator  } from '@playwright/test';

export abstract class BasePage {
    protected page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    withPage(newPage: Page): this {
        const NewClass = this.constructor as new (page: Page) => this;
        return new NewClass(newPage);
    }

    async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async click(locator: Locator) {
    await locator.click();
  }

  async type(locator: Locator, text: string) {
    await locator.fill(text);
  }

  async waitForVisible(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }
}