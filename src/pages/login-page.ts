import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';
import { URLS } from '../utils/constants';

export class LoginPage extends BasePage {
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('//input[@id="user_login"]');
    this.passwordInput = page.locator('//input[@id="user_pass"]');
    this.loginButton = page.locator('//input[@id="wp-submit"]');
    this.errorMessage = page.locator('//div[@id="login_error"]');
  }

  async goto() {
    await this.open(URLS.login);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
