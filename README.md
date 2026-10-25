# pawsocks-site

сайт сервера pawsocks на [starlight](https://starlight.astro.build).

## запуск

```sh
pnpm install
pnpm dev      # локально с горячей перезагрузкой
pnpm start    # сборка и запуск статики на $PORT (по умолчанию 3000)
```

## где что лежит

- `src/content/docs/index.mdx` — главная
- `src/content/docs/rules.mdx` — правила
- `src/styles/custom.css` — палитра и стили
- `src/content/i18n/ru.json` — подписи интерфейса
- `astro.config.mjs` — название, меню, язык
