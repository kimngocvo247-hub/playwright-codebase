import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

// trang Tags va Categories giong nhau nen viet chung 1 class
export class TermPage extends BasePage {
  url: string;
  nameInput: Locator;
  slugInput: Locator;
  descriptionInput: Locator;
  addButton: Locator;
  errorMessage: Locator;
  searchInput: Locator;
  searchButton: Locator;

  constructor(page: Page, url: string) {
    super(page);
    this.url = url;
    this.nameInput = page.locator('//input[@id="tag-name"]');
    this.slugInput = page.locator('//input[@id="tag-slug"]');
    this.descriptionInput = page.locator('//textarea[@id="tag-description"]');
    this.addButton = page.locator('//input[@id="submit"]');
    this.errorMessage = page.locator('//div[@id="ajax-response"]//div[contains(@class,"notice-error")]');
    this.searchInput = page.locator('//input[@id="tag-search-input"]');
    this.searchButton = page.locator('//input[@id="search-submit"]');
  }

  async goto() {
    await this.open(this.url);
  }

  // lay 1 dong trong bang theo ten
  getRow(name: string) {
    return this.page.locator(`//tbody[@id="the-list"]//tr[.//a[@class="row-title" and text()="${name}"]]`);
  }

  async addTerm(name: string, slug: string = '', description: string = '') {
    await this.nameInput.fill(name);
    await this.slugInput.fill(slug);
    await this.descriptionInput.fill(description);
    await this.addButton.click();
  }

  async search(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
    await this.page.waitForURL(/s=/);
  }

  async deleteTerm(name: string) {
    // note cua tui: bam nut search thi trang chua load xong da hover -> lau lau fail, xai goto cho chac
    await this.page.goto(this.url + '&s=' + name);

    const row = this.getRow(name);
    await row.hover();

    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    await row.locator('//a[contains(@class,"delete-tag")]').click();
  }
}
