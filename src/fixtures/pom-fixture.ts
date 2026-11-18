import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { DashboardPage } from '../pages/dashboard-page';
import { TagPage } from '../pages/tag-page';
import { CategoryPage } from '../pages/category-page';

type PomFixture = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  tagPage: TagPage;
  categoryPage: CategoryPage;
};


export const test = base.extend<PomFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  tagPage: async ({ page }, use) => {
    await use(new TagPage(page));
  },
  categoryPage: async ({ page }, use) => {
    await use(new CategoryPage(page));
  },
});

export { expect } from '@playwright/test';
