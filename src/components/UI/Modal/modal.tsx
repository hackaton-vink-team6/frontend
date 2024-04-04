import { ReactNode } from 'react';
import { Icon } from '@components/UI/Icon';

import modalStyles from './modal.module.scss';

interface IModalProps {
  handleClosingModal: () => void;
  children: ReactNode;
  title: string;
}

export const Modal: React.FC<IModalProps> = ({
  handleClosingModal,
  title,
  children,
}): JSX.Element => {
  return (
    <div className={modalStyles.background}>
      <div className={modalStyles.container}>
        <button
          className={modalStyles.closeButton}
          onClick={handleClosingModal}
        >
          <Icon type="close" />
        </button>
        <h1 className={modalStyles.title}>{title}</h1>
        <hr className={modalStyles.hr} />
        {children}
      </div>
    </div>
  );
};
