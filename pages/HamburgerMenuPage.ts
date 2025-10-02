import { Page , expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class HamburgerMenuPage extends BasePage{

    constructor(page: Page) {
        super(page);
    }

    async clickHamburger() {
        await this.page.click('//button[@id="react-burger-menu-btn"]');
    }


    async clickLogout() {
        await this.page.click('//a[@id="logout_sidebar_link"]');
    }

    async clickResetApp() {
        await this.page.click('//a[@id="reset_sidebar_link"]');
    }

    async clickClose() {
        await this.page.click('//button[@id="react-burger-cross-btn"]');
    }
    
}