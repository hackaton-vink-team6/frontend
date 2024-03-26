import { useState } from 'react';
import MemberHeader from '../member-header/member-header';

import chatHeaderStyles from './chat-header.module.css';

import searchIcon from '../../images/search.png';
import closeIcon from '../../images/close.png';

interface IChatHeaderProps {}

const ChatHeader: React.FC<IChatHeaderProps> = (): JSX.Element => {
  const [isFormOpened, setIsFormOpened] = useState<boolean>(false);

  // Функция открытия формы поиска
  function onButtonClick() {
    setIsFormOpened((prevState: boolean) => !prevState);
  }

  return (
    <div className={chatHeaderStyles.header}>
      <div className={chatHeaderStyles.infoSection}>
        {/* Индикация, что чат онлайн */}
        <div className={chatHeaderStyles.online} />
        {/* Идентификатор чата */}
        <p className={chatHeaderStyles.identificator}>#T53612</p>
      </div>

      <div className={chatHeaderStyles.interactionPanel}>
        {/* Форма поиска */}
        <div className={chatHeaderStyles.searchContainer}>
          <form
            className={`${chatHeaderStyles.form} ${isFormOpened ? chatHeaderStyles.formOpened : ''}`}
          >
            <input
              className={chatHeaderStyles.input}
              placeholder="Поиск..."
              required
            />
          </form>
          {/* Кнопка поиска/закрытия формы */}
          <button
            onClick={onButtonClick}
            className={`${chatHeaderStyles.button}`}
            type="button"
            aria-label={`${!isFormOpened ? 'открыть' : 'закрыть'} поиск`}
          >
            <img
              src={isFormOpened ? closeIcon : searchIcon}
              alt="иконка закрытия"
              className={`${chatHeaderStyles.icon} ${isFormOpened && chatHeaderStyles.closeIcon}`}
            />
          </button>
        </div>

        {/* Пользователи, участвующие в беседе */}
        <ul className={chatHeaderStyles.members}>
          <MemberHeader overflow={true} members={['Бот', 'Оператор 3']} />
          <MemberHeader overflow={false} members={['Оператор 2']} />
          <MemberHeader overflow={false} members={['Оператор 1']} />
        </ul>
      </div>
    </div>
  );
};

export default ChatHeader;
