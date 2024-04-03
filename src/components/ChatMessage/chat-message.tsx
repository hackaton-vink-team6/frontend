import { useState } from 'react';
import chatMessageStyles from './chat-message.module.scss';
import { RatingButton } from '../UI/RatingButton';

interface IChatMessageProps {
  isOutgoing: boolean;
  text: string;
  author: string;
}

export const ChatMessage: React.FC<IChatMessageProps> = ({
  isOutgoing,
  text,
  author,
}): JSX.Element => {
  const [ratingState, setRatingState] = useState<'up' | 'down' | null>(null);

  function onLikeClick() {
    setRatingState('up');
  }

  function onDislikeClick() {
    setRatingState('down');
  }
  return (
    <li
      className={`${chatMessageStyles.message} ${isOutgoing ? chatMessageStyles.outgoingMessage : chatMessageStyles.incomingMessage}`}
    >
      {!isOutgoing && (
        <span className={chatMessageStyles.title}>{author.charAt(0)}</span>
      )}
      <p className={chatMessageStyles.text}>{text}</p>
      {!isOutgoing && (
        <ul className={chatMessageStyles.ratingButtons}>
          <li className={chatMessageStyles.ratingButton}>
            <RatingButton
              type="up"
              state={ratingState}
              handleClick={onLikeClick}
            />
            <RatingButton
              type="down"
              state={ratingState}
              handleClick={onDislikeClick}
            />
          </li>
        </ul>
      )}
    </li>
  );
};
