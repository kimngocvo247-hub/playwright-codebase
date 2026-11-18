# 02 - Folder

```
playwright-codebase/
├── .github/workflows/   -> file chay CI
├── project-documentations/
├── src/
│   ├── pages/           -> POM
│   ├── fixtures/
│   └── utils/
├── tests/
│   ├── setup/           -> global setup, teardown
│   ├── auth/            -> test login
│   ├── tag/
│   └── category/
├── .env
├── .gitignore
├── playwright.config.ts
└── README.md
```

- src de code phu (page, fixture, utils), tests chi de file test
- tests chia theo tinh nang, muon chay rieng tag thi `npx playwright test tests/tag`
