
# Как внести изменения

Приложение написано на TypeScript и React. Используются:

- [Snowpack](https://www.snowpack.dev/) - для сборки и прочего веселья
- [VKUI](https://vkcom.github.io/vkui-styleguide/)
  - [Иконки](https://vkcom.github.io/icons/)
  - [Цвета](https://github.com/VKCOM/VKUI/blob/master/src/styles/bright_light.css)

Про использование TypeScript+React можно почитать [тут](https://fettblog.eu/typescript-react/)

## Первые шаги

Сделайте fork и клонируйте репозиторий себе на компьютер

```sh
git clone git@github.com:<your name>/vk-limits.git
```

Установите зависимости

```sh
npm install
```

Создайте новую ветку

```sh
git checkout -b <name_of_your_new_branch>
```

Данные лимитов находятся в файле `src/data.ts`.

## Команды

```sh
# Запускает live сервер
npm run start

# Запускает vk туннель
npm run tunnel

# Запускает форматирование
npm run format

# Запускает линтер
npm run linter

# Полностью собирает бандл для приложения
npm run build
```

## Создание коммита

Запустите форматирование.

```sh
npm run format
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
