import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HamburgerMenuPage } from '../pages/HamburgerMenuPage';
import { readExcel } from '../utils/excelReader';

const users = readExcel('test-data/users.xlsx', 'Sheet1');

for (const user of users) {
  test(`Logout flow for user: ${user.username}`, async ({ page }) => {

    const loginPage = new LoginPage(page);
    const hamburgerMenu = new HamburgerMenuPage(page);

    await loginPage.navigateTo('https://www.saucedemo.com/');

    await loginPage.enterUsername(user.username);
    await loginPage.enterPassword(user.password);
    await loginPage.clickLogin();

    if (user.valid) {
      await loginPage.assertHomepage();

      await hamburgerMenu.clickHamburger();

      await hamburgerMenu.clickLogout();

      await expect(page).toHaveURL('https://www.saucedemo.com/');

      await expect(page.locator('#login-button')).toBeVisible();
    } else {
      console.log(`Skipping logout for invalid user: ${user.username}`);
    }
  });
}
