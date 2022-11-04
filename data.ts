import {
  Icon28UserOutline,
  Icon28NameTagOutline,
  Icon28PictureStackOutline,
  Icon28Users3Outline,
  Icon28DocumentOutline,
  Icon28UserSquareOutline,
  Icon28UploadOutline,
  Icon28MarketOutline,
  Icon28MarketLikeOutline,
  Icon24Crop,
  Icon24Fullscreen,
  Icon28MusicOutline,
  Icon28VideocamOutline,
  Icon28MessageOutline,
  Icon28UsersOutline,
  Icon28RecentOutline,
  Icon28AdvertisingOutline,
  Icon28WorkOutline,
  Icon20EducationOutline,
  Icon28KeySquareOutline,
  Icon28ArticleOutline,
  Icon28HorseToyOutline,
  Icon28FavoriteOutline,
  Icon28LikeOutline,
  Icon28AttachOutline,
  Icon28ServicesOutline,
  Icon28GridSquareOutline,
  Icon28ListOutline,
  Icon28DownloadOutline,
  Icon28SearchOutline,
  Icon28Search,
  Icon28SettingsOutline,
  Icon28ArticlesOutline,
  Icon28ClockOutline,
} from "@vkontakte/icons";

export interface DataItem {
  name: string;
  Icon: typeof Icon28UserOutline;
  text: string;
  hint?: string;
  link?: string;
}

export interface DataGroup {
  name: string;
  color: string;
  items: DataItem[];
}

/**
 * Данные лимитов
 *
 * - [Иконки](https://vkcom.github.io/icons/)
 * - [Цвета](https://unpkg.com/@vkontakte/vkui-tokens@4/themes/vkBase/cssVars/declarations/onlyVariables.css)
 */
export const data: DataGroup[] = [
  {
    name: "Пользователь",
    color: "var(--vkui--color_accent_violet)",
    items: [
      {
        name: "Username",
        Icon: Icon28UserOutline,
        hint: "(адрес страницы)",
        text: "от 5 до 32 символов",
        link: "https://vk.com/faq16629",
      },
      {
        name: "Длина имени или фамилии",
        Icon: Icon28NameTagOutline,
        text: "до 32 символов",
      },
      {
        name: "Статус",
        Icon: Icon28ArticleOutline,
        text: "до 140 символов",
      },
      {
        name: "Пароль",
        Icon: Icon28KeySquareOutline,
        text: "от 6 символов",
      },
      {
        name: "Братья, сестры",
        Icon: Icon28Users3Outline,
        text: "до 15 человек",
      },
      {
        name: "Дети и внуки",
        Icon: Icon28HorseToyOutline,
        text: "до 15 детей и до 15 внуков",
      },
      {
        name: "Среднее образования",
        Icon: Icon20EducationOutline,
        text: "до 7 учебных заведений",
      },
      {
        name: "Высшее образования",
        Icon: Icon20EducationOutline,
        text: "до 10 образований",
      },
      {
        name: "Карьера",
        Icon: Icon28WorkOutline,
        text: "до 7 мест работы",
      },
      {
        name: "Военная служба",
        Icon: Icon28FavoriteOutline,
        text: "до 5 воинских частей",
      },
      {
        name: "Мне нравится",
        Icon: Icon28LikeOutline,
        text: "500 в сутки",
      },

      {
        name: "Реклама",
        Icon: Icon28AdvertisingOutline,
        text: "появляется через 3 месяца после регистрации",
      },
    ],
  },
  {
    name: "Чаты",
    color: "var(--vkui--color_accent_blue)",
    items: [
      {
        name: "Число участников",
        hint: "(обычный чат)",
        Icon: Icon28UsersOutline,
        text: "до 1 000 человек",
      },
      {
        name: "Число участников",
        hint: "(чат сообщества)",
        Icon: Icon28Users3Outline,
        text: "до 7 000 человек",
      },
      {
        name: "Полезная нагрузка «Payload»",
        hint: "к сообщению",
        Icon: Icon28SettingsOutline,
        text: "примерно до 1024 байт",
      },
      {
        name: "Длина сообщения",
        Icon: Icon28MessageOutline,
        text: "примерно до 4096 байт",
      },
      {
        name: "Вложения",
        hint: "к сообщению",
        Icon: Icon28AttachOutline,
        text: "до 10 вложений",
      },
    ],
  },
  {
    name: "Фотографии",
    color: "var(--vkui--color_accent_green)",
    items: [
      {
        name: "Допустимые форматы",
        Icon: Icon28DocumentOutline,
        text: "JPG, PNG, GIF",
        link: "https://vk.com/dev/upload_files",
      },
      {
        name: "Минимальный размер главной фотографии",
        hint: "(пользователя, сообщества или чата)",
        Icon: Icon28UserSquareOutline,
        text: "200x200px",
        link: "https://vk.com/dev/upload_files",
      },
      {
        name: "Минимальный размер фотографии товаров",
        Icon: Icon28MarketOutline,
        text: "400x400px",
        link: "https://vk.com/dev/upload_files_2",
      },
      {
        name: "Минимальный размер фотографии подборки товаров",
        Icon: Icon28MarketLikeOutline,
        text: "1280x720px",
        link: "https://vk.com/dev/upload_files_2",
      },
      {
        name: "Сумма высоты и ширины",
        Icon: Icon24Fullscreen,
        text: "до 14 000 px",
        link: "https://vk.com/faq8209",
      },
      {
        name: "Размер файла",
        Icon: Icon28UploadOutline,
        text: "не более 50 МБ",
        link: "https://vk.com/dev/upload_files",
      },
      {
        name: "Соотношение сторон",
        Icon: Icon24Crop,
        text: "не менее 1:20",
        link: "https://vk.com/dev/upload_files",
      },
      {
        name: "Фотографий в одном альбоме",
        Icon: Icon28PictureStackOutline,
        text: "до 10 000 фотографий",
        link: "https://vk.com/faq8209",
      },
      {
        name: "Отметки",
        Icon: Icon28Users3Outline,
        text: "до 35 человек",
        link: "https://vk.com/faq8209",
      },
    ],
  },
  {
    // Лимитов по максимальному разрешению видео нет
    name: "Истории",
    color: "var(--vkui--color_accent_red)",
    items: [
      {
        name: "Допустимые форматы",
        hint: "фотографии",
        Icon: Icon28DocumentOutline,
        text: "JPG, PNG, GIF",
        link: "https://vk.com/dev/upload_files_3",
      },
      {
        name: "Максимальная сумма высоты и ширины",
        Icon: Icon24Fullscreen,
        text: "14 000 px",
        link: "https://vk.com/dev/upload_files_3",
      },
      {
        name: "Размер файла",
        Icon: Icon28UploadOutline,
        text: "не более 10 МБ",
        link: "https://vk.com/dev/upload_files_3",
      },
      {
        name: "Длительность",
        hint: "видео",
        Icon: Icon28RecentOutline,
        text: "не более 15 секунд",
      },
      {
        name: "Видеокодек",
        Icon: Icon28VideocamOutline,
        text: "H.264",
        link: "https://vk.com/dev/upload_files_3",
      },
      {
        name: "Аудиокодек",
        Icon: Icon28MusicOutline,
        text: "AAC",
        link: "https://vk.com/dev/upload_files_3",
      },
    ],
  },
  {
    name: "Посты",
    color: "var(--vkui--color_accent_gray)",
    items: [
      {
        name: "Публикации",
        Icon: Icon28ArticlesOutline,
        text: "500 в сутки",
        link: "https://vk.com/wall-59800369_175307",
      },
      {
        name: "Отложенные записи",
        Icon: Icon28ClockOutline,
        text: "250 в сутки (1500 всего)",
        link: "https://vk.com/wall-59800369_175307",
      },
    ],
  },
  {
    name: "Документы",
    color: "var(--vkui--color_accent_gray)",
    items: [
      {
        name: "Допустимые форматы",
        Icon: Icon28DocumentOutline,
        text: "любые форматы за исключением музыкальных и исполняемых файлов",
        link: "https://vk.com/dev/upload_files_2?f=10.%20%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2",
      },
      {
        name: "Размер файла",
        Icon: Icon28UploadOutline,
        text: "не более 2048 МБ",
        link: "https://vk.com/dev/upload_files_2?f=10.%20%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2",
      },
    ],
  },
  {
    name: "API",
    color: "var(--vkui--color_accent_orange)",
    items: [
      {
        name: "Запросы от пользователя",
        Icon: Icon28UserOutline,
        text: "3 в секунду",
        link: "https://vk.com/dev/api_requests",
      },
      {
        name: "Запросы от сообщества",
        Icon: Icon28Users3Outline,
        text: "20 в секунду",
        link: "https://vk.com/dev/api_requests",
      },
      {
        name: "Запросы от сервиса",
        Icon: Icon28ServicesOutline,
        text: "3 в секунду",
        link: "https://vk.com/dev/api_requests",
      },
      {
        name: "Вызовы методов Execute",
        hint: "в рамках одного запроса",
        Icon: Icon28GridSquareOutline,
        text: "до 25 обращений к разным методам",
        link: "https://vk.com/dev/execute",
      },
      {
        name: "Операции Execute",
        hint: "в рамках одного запроса",
        Icon: Icon28ListOutline,
        text: "до 1000 операций",
        link: "https://vk.com/dev/execute",
      },
      {
        name: "Размер ответа Execute",
        Icon: Icon28DownloadOutline,
        text: "не более 5 МБ",
        link: "https://vk.com/dev/execute",
      },
      {
        name: "Лимит на newsfeed.search",
        Icon: Icon28SearchOutline,
        text: "1000 вызовов в сутки",
        link: "https://vk.com/dev/data_limits",
      },
      {
        name: "Лимит на wall.search",
        Icon: Icon28Search,
        text: "1000 вызовов в сутки",
        link: "https://vk.com/dev/data_limits",
      },
      {
        name: "Лимит на wall.get",
        Icon: Icon28ArticleOutline,
        text: "5000 вызовов в сутки",
        link: "https://vk.com/dev/data_limits",
      },
    ],
  },
];
