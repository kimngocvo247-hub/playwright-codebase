# playwright-codebase

Bai tap lesson 15 - build codebase test cho trang https://pw-practice-dev.playwrightvn.com/wp-admin

## Tai lieu
1. [Tinh nang website](project-documentations/01-website-feature.md)
2. [Folder](project-documentations/02-folder-design.md)
3. [POM](project-documentations/03-pom-design.md)
4. [Utils](project-documentations/04-utils-design.md)
5. [Fixture](project-documentations/05-fixture-design.md)
6. [Coding convention](project-documentations/06-coding-convention-design.md)

## Cai dat
```
npm install
npx playwright install chromium
```

Tao file `.env`:
```
BASE_URL=https://pw-practice-dev.playwrightvn.com
ADMIN_USERNAME=...
ADMIN_PASSWORD=...
```

## Chay test
```
npx playwright test
npx playwright test tests/tag
npx playwright test --grep @TAG_001
npx playwright show-report
```
