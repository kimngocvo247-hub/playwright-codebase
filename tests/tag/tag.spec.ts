import { test, expect } from '../../src/fixtures/pom-fixture';
import { randomName } from '../../src/utils/data-helper';

test.describe('Tag', () => {
  test.beforeEach(async ({ tagPage }) => {
    await tagPage.goto();
  });

  test('@TAG_001 - Them tag moi thanh cong', async ({ tagPage }) => {
    const tagName = randomName('tag');

    await test.step('Them tag', async () => {
      await tagPage.addTerm(tagName, '', 'tag test');

      await expect(tagPage.getRow(tagName)).toBeVisible();
      await expect(tagPage.nameInput).toHaveValue('');
    });

    await test.step('Xoa tag vua tao', async () => {
      await tagPage.deleteTerm(tagName);
      await expect(tagPage.getRow(tagName)).toHaveCount(0);
    });
  });

  test('@TAG_002 - Them tag trung ten thi bao loi', async ({ tagPage }) => {
    const tagName = randomName('tag');

    // Arrange: tao tag lan 1
    await tagPage.addTerm(tagName);
    await expect(tagPage.getRow(tagName)).toBeVisible();

    await tagPage.addTerm(tagName);

    await expect(tagPage.errorMessage).toBeVisible();
    await expect(tagPage.errorMessage).toContainText('already exists');

    await tagPage.deleteTerm(tagName);
  });

  test('@TAG_003 - Search tag theo ten', async ({ tagPage }) => {
    const tagName = randomName('tag');

    await tagPage.addTerm(tagName);
    await expect(tagPage.getRow(tagName)).toBeVisible();

    await tagPage.search(tagName);

    await expect(tagPage.getRow(tagName)).toBeVisible();
    await expect(tagPage.page.locator('//tbody[@id="the-list"]//tr')).toHaveCount(1);

    await tagPage.deleteTerm(tagName);
  });

  test('@TAG_004 - Xoa tag thanh cong', async ({ tagPage }) => {
    const tagName = randomName('tag');
    await tagPage.addTerm(tagName);
    await expect(tagPage.getRow(tagName)).toBeVisible();

    await tagPage.deleteTerm(tagName);

    await expect(tagPage.getRow(tagName)).toHaveCount(0);
    await tagPage.search(tagName);
    await expect(tagPage.getRow(tagName)).toHaveCount(0);
  });
});
