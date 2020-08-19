import Icon28UserOutline from '../web_modules/@vkontakte/icons/dist/28/user_outline.js';
import Icon28NameTagOutline from '../web_modules/@vkontakte/icons/dist/28/name_tag_outline.js';

/**
 * Данные лимитов
 *
 * - [Иконки](https://vkcom.github.io/icons/)
 * - [Цвета](https://github.com/VKCOM/VKUI/blob/master/src/styles/bright_light.css)
 */
export const data = [{
  name: 'Пользователь',
  color: 'var(--dynamic_violet)',
  items: [{
    name: 'Username',
    icon: Icon28UserOutline,
    hint: '(адрес страницы)',
    text: 'от 5 до 32 символов',
    link: 'https://vk.com/faq16629'
  }, {
    name: 'Длина имени или фамилии',
    icon: Icon28NameTagOutline,
    text: 'до 32 символов'
  }]
}];