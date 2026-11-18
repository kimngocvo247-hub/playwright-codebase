import { test as setup, expect } from '../../src/fixtures/pom-fixture';
import { AUTH_FILE, getAccount } from '../../src/utils/constants';

setup('login truoc', async ({ page, loginPage, dashboardPage }) => {
  console.log('From global setup - initialize project');
  const account = getAccount();
  await loginPage.goto();
  await loginPage.login(account.username, account.password);

  await expect(page).toHaveURL(/wp-admin/);
  await expect(dashboardPage.heading).toHaveText('Dashboard');

  await page.context().storageState({ path: AUTH_FILE });
});
