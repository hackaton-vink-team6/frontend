import classnames from 'classnames';
import { Typography } from '@components/UI/Typography';
import { MessageRating } from '@components/Rating';
import chatMessageStyles from './chat-message.module.scss';
import { MessageProps } from './type';

export const ChatMessage: React.FC<MessageProps> = ({
  children,
}): JSX.Element => {
  const { text, user_name, time } = children;

  const isOutgoing = !user_name;
  const author = user_name ?? 'Вы';

  const localTime = new Date(time).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Typography
      htmlTag="li"
      className={classnames(
        chatMessageStyles.message,
        isOutgoing
          ? chatMessageStyles.outgoingMessage
          : chatMessageStyles.incomingMessage,
      )}
    >
      {!isOutgoing && (
        <span className={chatMessageStyles.title}>{author.charAt(0)}</span>
      )}
      <div className={chatMessageStyles.content}>
        <Typography className={chatMessageStyles.text}>{text}</Typography>
        <Typography htmlTag="span" className={chatMessageStyles.time}>
          {localTime}
        </Typography>
      </div>
      {!isOutgoing && <MessageRating />}
    </Typography>
  );
};
