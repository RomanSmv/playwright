import { Page, Locator } from '@playwright/test';

export class SidebarPage {
  readonly page: Page;
  readonly menu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menu = page.locator('.accordion'); // Sidebar container that holds menu items
  }

  async clickOnMenuItem(itemText: string, nameClass?: string ,) {
    await this.menu.locator('span.text', { hasText: itemText, : nameClass }){
        constructor(parameters) {
            
        }
    } }).click();
  }
}