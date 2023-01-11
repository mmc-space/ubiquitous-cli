## @mmc-cloud/cli

Quickly create projects with vite and react

### install

```bash
  pnpm add @mmc-cloud/cli -g
```

### usage

```bash
  create-mmc [name]
```

### expand

Modify the following files

- [modules](src/utils/deps.ts)
- [template](src/template/)

1. Maintain optional modules and corresponding parameters
2. And add the corresponding file under the template file


### todo list
- [ ] coverage test
- [ ] Supports overwriting empty folders
- [ ] Support dependent version selection
- [ ] Support for monorepo
- [ ] Template pattern based on git repository
- [ ] A more convenient way to expand
- [ ] More detailed log information
- [ ] more template, for example: vue
