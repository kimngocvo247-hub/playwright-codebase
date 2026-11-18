import { test, expect } from '../../src/fixtures/pom-fixture';
import { getAccount } from '../../src/utils/constants';

// test login thi ko xai cookie da login
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login', () => {
  test('@AUTH_001 - Login fail khi sai mat khau', async ({ page, loginPage }) => {
    const account = getAccount();
    await loginPage.goto();
    await loginPage.login(account.username, 'sai-pasword-123');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('is incorrect');
    await expect(page).toHaveURL(/wp-login\.php/);
  });

  test('@AUTH_002 - Login fail khi bo trong username va password', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('', '');

    const message = await loginPage.usernameInput.evaluate((input: HTMLInputElement) => input.validationMessage);
    expect(message).not.toBe('');
    await expect(page).toHaveURL(/wp-login\.php/);
  });

  test('@AUTH_003 - Login thanh cong', async ({ page, loginPage, dashboardPage }) => {
    const account = getAccount();
    await loginPage.goto();
    await loginPage.login(account.username, account.password);
    
    await expect(page).toHaveURL(/wp-admin/);
    await expect(dashboardPage.heading).toHaveText('Dashboard');
    await expect(dashboardPage.atAGlanceBox).toBeVisible();
    await expect(dashboardPage.activityBox).toBeVisible();
  });
});
