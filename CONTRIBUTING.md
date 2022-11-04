# Как внести изменения

Приложение написано на TypeScript и React. Используются:

- [Next.js](https://nextjs.org/) - для сборки и прочего веселья
- [VKUI](https://vkcom.github.io/vkui/)
  - [Иконки](https://vkcom.github.io/icons/)
  - [Цвета](https://unpkg.com/@vkontakte/vkui-tokens@4/themes/vkBase/cssVars/declarations/onlyVariables.css)

Про использование TypeScript+React можно почитать [тут](https://fettblog.eu/typescript-react/)

## Первые шаги

Сделайте fork и клонируйте репозиторий себе на компьютер

```sh
git clone git@github.com:<your name>/vk-limits.git
```

Установите зависимости

```sh
cd vk-limits
yarn
```

Создайте новую ветку

```sh
git checkout -b <name_of_your_new_branch>
```

Данные лимитов находятся в файле `data.ts`.

## Команды

```sh
# Запускает live сервер
yarn dev

# Запускает линтер
yarn lint

# Полностью собирает бандл для приложения
yarn build
```

## Создание коммита

Запустите линтер.

```sh
yarn lint
```

Закоммите изменения

```sh
git add .
git commit
```

Запушите ветку

```sh
git push origin <name_of_your_new_branch>
```

Затем откройте [Pull Request](https://github.com/SevereCloud/vk-limits/compare) с `master` веткой
