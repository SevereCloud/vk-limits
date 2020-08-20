import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NameTagOutline from '@vkontakte/icons/dist/28/name_tag_outline';
import Icon28PictureStackOutline from '@vkontakte/icons/dist/28/picture_stack_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon28DocumentOutline from '@vkontakte/icons/dist/28/document_outline';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon28PaintRollerOutline from '@vkontakte/icons/dist/28/paint_roller_outline';
import Icon28UserSquareOutline from '@vkontakte/icons/dist/28/user_square_outline';
import Icon28UploadOutline from '@vkontakte/icons/dist/28/upload_outline';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28MarketLikeOutline from '@vkontakte/icons/dist/28/market_like_outline';
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
        icon: Icon28PaintRollerOutline,
        text: '14 000 px',
        link: 'https://vk.com/faq8209',
      },
      {
        name: 'Объем',
        icon: Icon28UploadOutline,
        text: 'не более 50 МБ',
        link: 'https://vk.com/dev/upload_files',
      },
      {
        name: 'Соотношение сторон',
        icon: Icon28PictureOutline,
        text: 'не менее 1:20',
        link: 'https://vk.com/dev/upload_files',
      },
      {
        name: 'Максимум фотографий в одном альбоме',
        icon: Icon28PictureStackOutline,
        text: '10 000 штук',
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
];
