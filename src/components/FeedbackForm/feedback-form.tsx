import React, { useState } from 'react';
import { useId } from 'react';
import { FormEvent } from 'react';
import { Button } from '@/components/UI/Button';
import { Typography } from '@/components/UI/Typography';

import feedbackStyles from './feedback-form.module.scss';

interface IFeedbackFormProps {
  handleCancelClick: () => void;
}

export const FeedbackForm: React.FC<IFeedbackFormProps> = ({
  handleCancelClick,
}): JSX.Element => {
  const textAreaId = useId();

  const [opinion, setOpinion] = useState<string>('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <Typography htmlTag="h1" size="s" weight="bold">
        Почему ответ не помог?
      </Typography>
      <hr className={feedbackStyles.hr} />
      <form className={feedbackStyles.form} onSubmit={onSubmit}>
        <label className={feedbackStyles.text} htmlFor={textAreaId}>
          Опишите, что вам не понравилось:
        </label>
        <textarea
          id={textAreaId}
          name="opinion"
          cols={30}
          rows={5}
          className={feedbackStyles.textarea}
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
        />
        <div className={feedbackStyles.buttons}>
          <Button
            text="Отменить"
            view="secondary"
            className={feedbackStyles.button}
            onClick={handleCancelClick}
          />
          <Button
            text="Отправить"
            view="secondary"
            className={feedbackStyles.button}
            disabled={!opinion}
          />
        </div>
      </form>
    </>
  );
};
