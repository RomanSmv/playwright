import { Page, Locator } from '@playwright/test';

export class SidebarPage {
  readonly page: Page;
  readonly menu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menu = page.locator('.accordion'); // Sidebar container that holds menu items
  }

  async clickOnMenuItem(itemText: string) {
    await this.menu.locator('div.header-text', { hasText: itemText }).click();
  }
  
  async clickOnSubMenuItem(id: string, itemText: string) {
    const menuItem = this.menu.locator(`li#${id}`, {hasText: itemText})
    await menuItem.click();
  }
}

  