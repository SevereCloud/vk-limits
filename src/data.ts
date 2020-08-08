import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NameTagOutline from '@vkontakte/icons/dist/28/name_tag_outline';
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
];
