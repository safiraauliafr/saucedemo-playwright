import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { readExcel } from '../utils/excelReader';
import { login } from '../utils/auth';

const users = readExcel('test-data/users.xlsx', 'Sheet1');

for (const user of users.filter(u => u.valid)) {
  test(`Add item to cart for user: ${user.username} - item: ${user.itemName}`, async ({ page }) => {

    await login(page, user.username, user.password);

    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productPage.clickAddToCart(user.itemName);

    // verify number in cart badge = remove item buttons
    await productPage.assertCartBadge();
    const badgeCount = await productPage.getCartBadgeCount();
    const removeCount = await productPage.getRemoveButtonsCount();
    expect(removeCount).toBe(badgeCount);

    await productPage.clickCart();

    await checkoutPage.clickContinueShopping();

  });
}
