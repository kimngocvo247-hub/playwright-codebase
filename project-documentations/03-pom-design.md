# 03 - POM

```
BasePage
├── LoginPage
├── DashboardPage
└── TermPage
    ├── TagPage
    └── CategoryPage
```

- **BasePage**: co page, heading (h1), ham open(url)
- **LoginPage**: o username, password, nut login, loi. Ham goto(), login()
- **DashboardPage**: box At a Glance, Activity
- **TermPage**: form them moi, o search. Ham addTerm(), search(), getRow(), deleteTerm()
- **TagPage**: chi truyen url trang tag
- **CategoryPage**: them o chon Parent, ham addChildCategory()

Note cua tui: trang Tags voi Categories xai chung form, id giong nhau (#tag-name, #tag-slug...) nen tui gom lai thanh TermPage, 2 cai kia extends lai cho do viet 2 lan.

- locator xai xpath
- expect de trong file test, ko de trong page
