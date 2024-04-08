import { useState } from 'react';
import { HeaderMember } from '@components/HeaderMember';
import { Typography } from '@components/UI/Typography';
import { Icon } from '@components/UI/Icon';

import chatHeaderStyles from './chat-header.module.scss';

interface IChatHeaderProps {}

export const ChatHeader: React.FC<IChatHeaderProps> = (): JSX.Element => {
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
        <Typography
          size="s"
          weight="bold"
          htmlTag="p"
          className={chatHeaderStyles.identificator}
        >
          #T53612
        </Typography>
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
            {isFormOpened ? (
              <Icon
                className={`${chatHeaderStyles.icon}  ${chatHeaderStyles.closeIcon}`}
                type="close"
              />
            ) : (
              <Icon className={`${chatHeaderStyles.icon}`} type="search" />
            )}
          </button>
        </div>

        {/* Пользователи, участвующие в беседе */}
        <ul className={chatHeaderStyles.members}>
          <HeaderMember overflow={true} members={['Бот', 'Оператор 3']} />
          <HeaderMember overflow={false} members={['Оператор 2']} />
          <HeaderMember overflow={false} members={['Оператор 1']} />
        </ul>
      </div>
    </div>
  );
};
