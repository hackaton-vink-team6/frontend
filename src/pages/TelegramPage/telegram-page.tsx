import { useEffect } from 'react';

export const TelegramPage = () => {
  useEffect(() => {
    const newWindow = window.open('https://t.me/vinkru', '_blank');
    if (newWindow) {
      newWindow.opener = null;
    }
  }, []);

  return null;
};
