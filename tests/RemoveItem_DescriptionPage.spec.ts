import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { readExcel } from '../utils/excelReader';
import { login } from '../utils/auth';

const users = readExcel('test-data/users.xlsx', 'Sheet1');

for (const user of users.filter(u => u.valid)) {
  test(`Remove item from cart for user: ${user.username}, title: ${user.title}`, async ({ page }) => {

    await login(page, user.username, user.password);

    const productPage = new ProductPage(page);

    await productPage.clickItemDetails(user.title);

    await productPage.clickAddToCartDetails();

    await productPage.clickRemoveDetails();
    
  });
}
