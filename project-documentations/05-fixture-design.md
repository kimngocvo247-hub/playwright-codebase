# 05 - Fixture

## pom-fixture.ts
Tao san loginPage, dashboardPage, tagPage, categoryPage. Trong test goi ra xai luon, khoi phai `new TagPage(page)`.

```ts
test('them tag', async ({ tagPage }) => {
  await tagPage.goto();
});
```

File test import test, expect tu `pom-fixture` chu ko import tu `@playwright/test`.

## Login
- project setup chay global.setup.ts: login 1 lan, luu cookie vao `.auth/admin.json`
- project chromium co storageState + dependencies setup -> vo test la login san roi
- project teardown chay global.teardown.ts: xoa file `.auth/admin.json`
- file login.spec.ts can chua login nen xai `test.use({ storageState: { cookies: [], origins: [] } })`

Note cua tui: ko lam fixture login vi fixture chay lai moi test, 9 test la login 9 lan, cham.
