import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NameTagOutline from '@vkontakte/icons/dist/28/name_tag_outline';
import Icon28PictureStackOutline from '@vkontakte/icons/dist/28/picture_stack_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon28DocumentOutline from '@vkontakte/icons/dist/28/document_outline';
import Icon28UserSquareOutline from '@vkontakte/icons/dist/28/user_square_outline';
import Icon28UploadOutline from '@vkontakte/icons/dist/28/upload_outline';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28MarketLikeOutline from '@vkontakte/icons/dist/28/market_like_outline';
import Icon24Crop from '@vkontakte/icons/dist/24/crop';
import Icon24Fullscreen from '@vkontakte/icons/dist/24/fullscreen';
import Icon28MusicOutline from '@vkontakte/icons/dist/28/music_outline';
import Icon28VideocamOutline from '@vkontakte/icons/dist/28/videocam_outline';
import Icon28HistoryForwardOutline from '@vkontakte/icons/dist/28/history_forward_outline';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import type { IconProps } from './types';

export interface DataItem {
  name: string;
  icon: React.FunctionComponent<IconProps>;
  text: string;
  hint?: string;
  link?: string;
}

export interface DataGroup {
  name: string;
  // icon: React.FunctionComponent<IconProps>;
  color: string;
  items: DataItem[];
}

/**
 * Данные лимитов
 *
 * - [Иконки](https://vkcom.github.io/icons/)
 * - [Цвета](https://github.com/VKCOM/VKUI/blob/master/src/styles/bright_light.css)
 */
export const data: DataGroup[] = [
  {
    name: 'Пользователь',
    color: 'var(--dynamic_violet)',
    items: [
      {
        name: 'Username',
        icon: Icon28UserOutline,
        hint: '(адрес страницы)',
        text: 'от 5 до 32 символов',
        link: 'https://vk.com/faq16629',
      },
      {
        name: 'Длина имени или фамилии',
        icon: Icon28NameTagOutline,
        text: 'до 32 символов',
      },
    ],
  },
  {
    name: 'Чаты',
    color: 'var(--dynamic_blue)',
    items: [
      {
        name: 'Число участников',
        hint: '(обычный чат)',
        icon: Icon28UsersOutline,
        text: 'до 500 человек',
      },
      {
        name: 'Число участников',
        hint: '(чат сообщества)',
        icon: Icon28Users3Outline,
        text: 'до 3 000 человек',
      },
      {
        name: 'Длина сообщения',
        icon: Icon28MessageOutline,
        text: 'примерно до 4096 байт',
      },
    ],
  },
  {
    name: 'Фотографии',
    color: 'var(--dynamic_green)',
    items: [
      {
        name: 'Допустимые форматы',
        icon: Icon28DocumentOutline,
        text: 'JPG, PNG, GIF',
        link: 'https://vk.com/dev/upload_files',
      },
      {
        name: 'Минимальный размер главной фотографии',
        hint: '(пользователя, сообщества или чата)',
        icon: Icon28UserSquareOutline,
        text: '200x200px',
        link: 'https://vk.com/dev/upload_files',
      },
      {
        name: 'Минимальный размер фотографии товаров',
        icon: Icon28MarketOutline,
        text: '400x400px',
        link: 'https://vk.com/dev/upload_files_2',
      },
      {
        name: 'Минимальный размер фотографии подборки товаров',
        icon: Icon28MarketLikeOutline,
        text: '1280x720px',
        link: 'https://vk.com/dev/upload_files_2',
      },
      {
        name: 'Максимальная сумма высоты и ширины',
        icon: Icon24Fullscreen,
        text: '14 000 px',
        link: 'https://vk.com/faq8209',
      },
      {
        name: 'Размер файла',
        icon: Icon28UploadOutline,
        text: 'не более 50 МБ',
        link: 'https://vk.com/dev/upload_files',
      },
      {
        name: 'Соотношение сторон',
        icon: Icon24Crop,
        text: 'не менее 1:20',
        link: 'https://vk.com/dev/upload_files',
      },
      {
        name: 'Фотографий в одном альбоме',
        icon: Icon28PictureStackOutline,
        text: 'до 10 000 фотографий',
        link: 'https://vk.com/faq8209',
      },
      {
        name: 'Максимум отметок',
        icon: Icon28Users3Outline,
        text: '35 человек',
        link: 'https://vk.com/faq8209',
      },
    ],
  },
  {
    // Лимитов по максимальному разрешению видео нет
    name: 'Истории',
    color: 'var(--dynamic_red)',
    items: [
      {
        name: 'Допустимые форматы',
        hint: 'фотографии',
        icon: Icon28DocumentOutline,
        text: 'JPG, PNG, GIF',
        link: 'https://vk.com/dev/upload_files_3',
      },
      {
        name: 'Максимальная сумма высоты и ширины',
        icon: Icon24Fullscreen,
        text: '14 000 px',
        link: 'https://vk.com/dev/upload_files_3',
      },
      {
        name: 'Размер файла',
        icon: Icon28UploadOutline,
        text: 'не более 10 МБ',
        link: 'https://vk.com/dev/upload_files_3',
      },
      {
        name: 'Длительность',
        hint: 'видео',
        icon: Icon28HistoryForwardOutline,
        text: 'не более 15 секунд',
      },
      {
        name: 'Видеокодек',
        icon: Icon28VideocamOutline,
        text: 'H.264',
        link: 'https://vk.com/dev/upload_files_3',
      },
      {
        name: 'Аудиокодек',
        icon: Icon28MusicOutline,
        text: 'AAC',
        link: 'https://vk.com/dev/upload_files_3',
      },
    ],
  },
  {
    name: 'Документы',
    color: 'var(--dynamic_gray)',
    items: [
      {
        name: 'Допустимые форматы',
        icon: Icon28DocumentOutline,
        text: 'любые форматы за исключением mp3 и исполняемых файлов',
        link:
          'https://vk.com/dev/upload_files_2?f=10.%20%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2',
      },
      {
        name: 'Размер файла',
        icon: Icon28UploadOutline,
        text: 'не более 1024 МБ',
        link:
          'https://vk.com/dev/upload_files_2?f=10.%20%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2',
      },
    ],
  },
];
