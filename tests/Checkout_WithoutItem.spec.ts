import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { readExcel } from '../utils/excelReader';
import { login } from '../utils/auth';

const users = readExcel('test-data/users.xlsx', 'Sheet1');

for (const user of users.filter(u => u.valid)) {
  test(`Checkout flow with item for user: ${user.username}}`, async ({ page }) => {

    await login(page, user.username, user.password);

    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productPage.clickCart();

    await checkoutPage.clickCheckout();
    await page.waitForTimeout(2000);

    await checkoutPage.enterFirstName('Test');
    await checkoutPage.enterLastName('A');
    await checkoutPage.enterPostalCode('12345');
    await page.waitForTimeout(1000);
    await checkoutPage.clickContinue();
    await page.waitForTimeout(1000);

    await page.waitForTimeout(1000);
    await checkoutPage.assertPaymentInfo();

    await checkoutPage.clickClose();
    await page.waitForTimeout(1000);

    await checkoutPage.assertThankYouForOrder();

    await checkoutPage.clickBackToHome();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
}
