import { ReactNode } from 'react';
import { Icon } from '@components/UI/Icon';
import modalStyles from './modal.module.scss';

interface IModalProps {
  handleClosingModal: () => void;
  children: ReactNode;
}

export const Modal: React.FC<IModalProps> = ({
  handleClosingModal,
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
        {children}
      </div>
    </div>
  );
};
