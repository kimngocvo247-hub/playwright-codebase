import { Page } from '@playwright/test';
import { TermPage } from './term-page';
import { URLS } from '../utils/constants';

export class TagPage extends TermPage {
  constructor(page: Page) {
    super(page, URLS.tag);
  }
}
