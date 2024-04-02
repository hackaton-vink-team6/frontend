import { type FC } from 'react';
import { useAppDispatch } from '@/store';
import { NavButton } from '@components/UI/NavButton';
import ChatHeader from '@/components/chat-header/chat-header';
import { ChatBody } from '@/components/ChatBody';
import { ChatFooter } from '@/components/ChatFooter';
import { setAppIsActive, switchPage } from '@/store/app/slice';
//import { selectIsAppActive } from '@/store/app/selectors';
import { Pages } from '@/types';
import styles from './chat-page.module.scss';
import { Resizer } from '@/components/Resizer';

export const ChatPage: FC = () => {
  const dispatch = useAppDispatch();
  //const isAppActive = useAppSelector(selectIsAppActive);

  const handleClose = () => {
    dispatch(setAppIsActive(false));
    dispatch(switchPage(Pages.root));
  };

  return (
    <div className={styles.container}>
      <Resizer position="left">
        <div className={styles.chat}>
          <ChatHeader />
          <ChatBody />
          <ChatFooter />
        </div>
      </Resizer>
      <NavButton
        className={styles['close-button']}
        iconName="close"
        onClick={handleClose}
      />
    </div>
  );
};
