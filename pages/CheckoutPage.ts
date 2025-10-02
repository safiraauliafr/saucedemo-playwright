import { Page , expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage{

    constructor(page: Page) {
        super(page);
    }

    async clickContinueShopping() {
        await this.page.click('//button[@id="continue-shopping"]');
    }

    async clickCheckout() {
        await this.page.click('//button[@id="checkout"]');
    }

    async enterFirstName(first_name: string) {
        await this.page.fill('//input[@name="firstName"]', first_name);
    }

    async enterLastName(last_name: string) {
        await this.page.fill('//input[@name="lastName"]', last_name);
    }

    async enterPostalCode(postal_code: string) {
        await this.page.fill('//input[@name="postalCode"]', postal_code);
    }

    async clickContinue() {
        await this.page.click('//input[@id="continue"]');
    }

    async assertPaymentInfo() {
        await expect(this.page.locator('//div[@data-test="payment-info-value"]')).toBeVisible({timeout: 70000});
    }

    async clickClose() {
        await this.page.click('//button[@id="finish"]');
    }

    async assertThankYouForOrder() {
        await expect(this.page.locator('//h2[@class="complete-header"]')).toBeVisible({timeout: 7000});
    }

    async clickBackToHome() {
        await this.page.click('//button[@id="back-to-products"]');
    }
    
}