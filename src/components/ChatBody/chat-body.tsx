import { type FC } from 'react';
//import { useAppSelector, useAppDispatch } from '@/store';
//import { selectIsAppActive } from '@/store/app/selectors';
//import { setAppIsActive } from '@/store/app/slice';
import styles from './chat-body.module.scss';
import { Messages } from '@/components/ChatMessages';

export const ChatBody: FC = () => {
  //const dispatch = useAppDispatch();
  //const isAppActive = useAppSelector(selectIsAppActive);

  return (
    <div className={styles['chat-body-wrapper']} >
    <div className={styles["chat-body"]}>
      <Messages />
    </div>
    </div>
  );
};
