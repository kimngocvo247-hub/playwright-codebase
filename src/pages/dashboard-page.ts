import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';
import { URLS } from '../utils/constants';

export class DashboardPage extends BasePage {
  atAGlanceBox: Locator;
  activityBox: Locator;

  constructor(page: Page) {
    super(page);
    this.atAGlanceBox = page.locator('//h2[text()="At a Glance"]');
    this.activityBox = page.locator('//h2[text()="Activity"]');
  }

  async goto() {
    await this.open(URLS.dashboard);
  }
}
