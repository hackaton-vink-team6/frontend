import { useState, useId, FormEvent } from 'react';
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
      ></textarea>
      <div className={feedbackStyles.buttons}>
        <button
          onClick={handleCancelClick}
          type="button"
          className={feedbackStyles.button}
        >
          Отменить
        </button>
        <button
          disabled={!opinion}
          type="submit"
          className={feedbackStyles.button}
        >
          Отправить
        </button>
      </div>
    </form>
  );
};
