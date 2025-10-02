import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export async function login(page: Page, username: string, password: string) {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('https://www.saucedemo.com/');
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
    await loginPage.clickLogin();
    await loginPage.assertHomepage();
}
