import { test, expect } from '../../src/fixtures/pom-fixture';
import { randomName } from '../../src/utils/data-helper';

test.describe('Category', () => {
  test.beforeEach(async ({ categoryPage }) => {
    await categoryPage.goto();
  });

  test('@CAT_001 - Them category moi thanh cong', async ({ categoryPage }) => {
    const categoryName = randomName('cat');

    await categoryPage.addTerm(categoryName, '', 'category test');

    await expect(categoryPage.getRow(categoryName)).toBeVisible();

    await categoryPage.deleteTerm(categoryName);
    await expect(categoryPage.getRow(categoryName)).toHaveCount(0);
  });

  test('@CAT_002 - Them category con co parent', async ({ categoryPage }) => {
    const parentName = randomName('cat-cha');
    const childName = randomName('cat-con');

    await test.step('Tao category cha', async () => {
      await categoryPage.addTerm(parentName);
      await expect(categoryPage.getRow(parentName)).toBeVisible();
    });

    await test.step('Tao category con', async () => {
      await categoryPage.goto();
      await categoryPage.addChildCategory(childName, parentName);

      // category con co dau "— " o truoc ten nen xai contains
      await expect(categoryPage.page.locator(`//tbody[@id="the-list"]//a[@class="row-title" and contains(text(),"${childName}")]`)).toBeVisible();
    });

    await test.step('Xoa con truoc roi xoa cha', async () => {
      await categoryPage.deleteTerm(childName);
      await categoryPage.deleteTerm(parentName);
    });
  });
});
