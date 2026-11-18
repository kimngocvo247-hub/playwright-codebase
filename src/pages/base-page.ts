import { Page, Locator } from '@playwright/test';

export class BasePage {
  page: Page;
  heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('//h1').first();
  }

  async open(url: string) {
    await this.page.goto(url);
  }
}
