import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { readExcel } from '../utils/excelReader';
import { login } from '../utils/auth';

const users = readExcel('test-data/users.xlsx', 'Sheet1');

for (const user of users.filter(u => u.valid)) {
  test(`Remove item from cart for user: ${user.username} - item: ${user.itemName}`, async ({ page }) => {

    await login(page, user.username, user.password);

    const productPage = new ProductPage(page);
    await productPage.clickAddToCart(user.itemName);

    await productPage.assertCartBadge();

    await productPage.clickRemove(user.itemName);

    const cartBadge = page.locator('//span[@class="shopping_cart_badge"]');
    await expect(cartBadge).toHaveCount(0);

    await productPage.clickCart();
    await expect(page.locator('//div[text()="Sauce Labs Bike Light"]')).toHaveCount(0);
  });
}
