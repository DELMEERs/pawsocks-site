# pawsocks-site

сайт сервера pawsocks на [starlight](https://starlight.astro.build).

## запуск

```sh
pnpm install
pnpm dev      # локально с горячей перезагрузкой
pnpm build    # собрать сайт в dist
pnpm start    # раздать готовый dist на $PORT (по умолчанию 3000)
```

на хостинге сайт не собирается — не хватает памяти. после каждого пуша в `main`
github actions собирает сайт и коммитит папку `dist` обратно в `main`,
а хостинг только раздаёт её командой `start`.

## где что лежит

- `src/content/docs/index.mdx` — главная
- `src/content/docs/rules.mdx` — правила
- `src/styles/custom.css` — палитра и стили
- `src/content/i18n/ru.json` — подписи интерфейса
- `astro.config.mjs` — название, меню, язык
