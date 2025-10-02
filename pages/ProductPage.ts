import { Page , expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage{

    constructor(page: Page) {
        super(page);
    }

    async clickCart() {
        await this.page.click('//div[@id="shopping_cart_container"]');
    }


    async clickAddToCart(itemName: string) {
    const addButtonSelector = `//button[contains(@id, "add-to-cart-${itemName}")]`;
    await this.page.click(addButtonSelector);
  }

    async clickRemove(itemName: string) {
    const removeButtonSelector = `//button[contains(@id, "remove-${itemName}")]`;
    await this.page.click(removeButtonSelector);
  }

    async clickItemDetails(title: string) {
        const itemDetails = `//div[text() = "${title}"]`;
        await this.page.click(itemDetails);
    }

    async clickFilterIcon() {
        await this.page.click('//span[@class="active_option"]');
    }

    async clickFilterNameAsc() {
        await this.page.click('//option[@value="az"]');
    }

    async clickFilterNameDesc() {
        await this.page.click('//option[@value="za"]');
    }

    async clickFilterPriceAsc() {
        await this.page.click('//option[@value="lohi"]');
    }

    async clickFilterPriceDesc() {
        await this.page.click('//option[@value="hilo"]');
    }

    async clickAddToCartDetails() {
        await this.page.click('//button[@id="add-to-cart"]');
    }

    async clickRemoveDetails() {
        await this.page.click('//button[@id="remove"]');
    }

    async assertCartBadge() {
        await expect(this.page.locator('//span[@class="shopping_cart_badge"]')).toBeVisible({timeout: 7000});
    }

    async getCartBadgeCount(): Promise<number> {
    const badge = this.page.locator('//span[@class="shopping_cart_badge"]');
    const text = await badge.textContent();
    return Number(text);
  }

  async getRemoveButtonsCount(): Promise<number> {
    return this.page.locator('//button[contains(@id, "remove-")]').count();
  }
    
}