import chatHeaderStyles from './chat-header.module.css';
import searchIcon from '../../images/search.png';
import testUserImage from '../../images/test-image.avif';
import { useState } from 'react';
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

      <div className={chatHeaderStyles.searchAvatarSection}>
        {/* Форма поиска */}

        <form className={chatHeaderStyles.form}>
          <input
            className={chatHeaderStyles.input}
            placeholder="Поиск..."
            required
          />
          {/* Кнопка поиска */}
          <button
            onClick={onButtonClick}
            className={chatHeaderStyles.searchButton}
            type="button"
          >
            <img
              src={searchIcon}
              alt="иконка поиска"
              className={chatHeaderStyles.icon}
            />
          </button>
        </form>

        {/* Пользователи, участвующие в беседе */}
        <ul className={chatHeaderStyles.members}>
          <li className={chatHeaderStyles.member}>
            <img
              alt="изображение участника чата"
              src={testUserImage}
              className={chatHeaderStyles.memberImage}
            />
          </li>
          <li className={chatHeaderStyles.member}>
            <img
              alt="изображение участника чата"
              src={testUserImage}
              className={chatHeaderStyles.memberImage}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatHeader;
