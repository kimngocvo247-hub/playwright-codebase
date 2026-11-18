# 06 - Coding convention

- ten file: chu thuong, gach ngang. vd `tag-page.ts`
- file test: `ten-tinh-nang.spec.ts`
- class: `TagPage`, `LoginPage`
- bien, ham: `tagName`, `addTerm()`
- hang so: chu hoa `AUTH_FILE`
- locator: ten + loai o cuoi: `nameInput`, `addButton`

## Ten test
`@MODULE_001 - mo ta`, vd `@TAG_001 - Them tag moi thanh cong`

Chay 1 test: `npx playwright test --grep @TAG_001`

## Viet test
- comment // Arrange, // Act, // Assertion
- test dai thi chia test.step
- tao data thi cuoi test xoa
- ko xai waitForTimeout

## Git
- ko push .env, .auth, node_modules
- commit: `feat: ...`, `fix: ...`
