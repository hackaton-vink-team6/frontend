import { useState, type FC } from 'react';
import { RatingButton } from '@components/UI/RatingButton';
import { Typography } from '../UI/Typography';
import ratingStyles from './message-rating.module.scss';

export const MessageRating: FC = () => {
  const [ratingState, setRatingState] = useState<'up' | 'down' | null>(null);

  function onLikeClick() {
    setRatingState('up');
  }

  function onDislikeClick() {
    setRatingState('down');
  }

  return (
    <ul className={ratingStyles.ratingButtons}>
      <Typography htmlTag="li" className={ratingStyles.ratingButton}>
        <RatingButton type="up" state={ratingState} handleClick={onLikeClick} />
        <RatingButton
          type="down"
          state={ratingState}
          handleClick={onDislikeClick}
        />
      </Typography>
    </ul>
  );
};
