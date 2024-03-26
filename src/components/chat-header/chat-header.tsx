import chatHeaderStyles from './chat-header.module.css';
import searchIcon from '../../images/search.png';
import testUserImage from '../../images/test-image.avif';
import { useState } from 'react';
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

      <div className={chatHeaderStyles.searchAvatarSection}>
        {/* Форма поиска */}

        <form
          className={`${chatHeaderStyles.form} ${isFormOpened && chatHeaderStyles.formOpened}`}
        >
          <input
            className={`${chatHeaderStyles.input} ${isFormOpened && chatHeaderStyles.inputVisible}`}
            placeholder="Поиск..."
            required
          />

          {/* Кнопка поиска */}
          <button
            onClick={onButtonClick}
            className={chatHeaderStyles.button}
            type="button"
            aria-label={`${!isFormOpened ? 'открыть' : 'закрыть'} поиск`}
          >
            {isFormOpened ? (
              <img
                src={closeIcon}
                alt="иконка закрытия"
                className={chatHeaderStyles.closeIcon}
              />
            ) : (
              <img
                src={searchIcon}
                alt="иконка поиска"
                className={chatHeaderStyles.searchIcon}
              />
            )}
          </button>
        </form>

        {/* Пользователи, участвующие в беседе */}
        <ul className={chatHeaderStyles.members}>
          <li className={chatHeaderStyles.member}>
            <div className={chatHeaderStyles.memberOverlay}>
              <img
                alt="изображение участника чата"
                src={testUserImage}
                className={`${chatHeaderStyles.memberOverlay} ${chatHeaderStyles.absoluteMember}`}
              />
              <p className={chatHeaderStyles.text}>+1</p>
            </div>
          </li>
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
