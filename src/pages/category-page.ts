import { Page, Locator } from '@playwright/test';
import { TermPage } from './term-page';
import { URLS } from '../utils/constants';

export class CategoryPage extends TermPage {
  parentSelect: Locator;

  constructor(page: Page) {
    super(page, URLS.category);
    this.parentSelect = page.locator('//select[@id="parent"]');
  }

  // tao category con
  async addChildCategory(name: string, parentName: string) {
    await this.parentSelect.selectOption({ label: parentName });
    await this.addTerm(name);
  }
}
