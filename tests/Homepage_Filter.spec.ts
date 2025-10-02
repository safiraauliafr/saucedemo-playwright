import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { readExcel } from '../utils/excelReader';
import { login } from '../utils/auth';

const users = readExcel('test-data/users.xlsx', 'Sheet1');

for (const user of users.filter(u => u.valid)) {
  test(`Add item to cart for user: ${user.username}`, async ({ page }) => {

    await login(page, user.username, user.password);

    const productPage = new ProductPage(page);

   // sorting by Name A-Z
    await productPage.clickFilterIcon();
    await page.waitForTimeout(1000);
    await productPage.clickFilterNameAsc();
    await page.waitForTimeout(3000);

    // sorting by Name Z-A
    await productPage.clickFilterIcon();
    await page.waitForTimeout(1000);
    await productPage.clickFilterNameDesc();
    await page.waitForTimeout(3000);

    // sorting by Price Low to High
    await productPage.clickFilterIcon();
    await page.waitForTimeout(1000);
    await productPage.clickFilterPriceAsc();
    await page.waitForTimeout(3000);

    // sorting by Price High to Low
    await productPage.clickFilterIcon();
    await page.waitForTimeout(1000);
    await productPage.clickFilterPriceDesc();
    await page.waitForTimeout(3000);

  });
}
