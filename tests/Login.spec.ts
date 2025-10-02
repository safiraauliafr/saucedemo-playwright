import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { readExcel } from '../utils/excelReader';

const users = readExcel('test-data/users.xlsx', 'Sheet1');

for (const user of users) {
  test(`Login attempt with user: ${user.username}`, async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    const inventoryPage = new ProductPage(page);
    await loginPage.navigateTo('https://www.saucedemo.com/');

    await loginPage.enterUsername(user.username);
    await loginPage.enterPassword(user.password);
    await loginPage.clickLogin();

    if (user.valid) {
      await loginPage.assertHomepage();
    } else {
      const error = await loginPage.getErrorMessage();
      expect(error).toContain('Epic sadface');
    }
  });
}
