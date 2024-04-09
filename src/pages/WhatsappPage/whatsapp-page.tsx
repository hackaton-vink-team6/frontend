import { useEffect } from 'react';

export const WhatsappPage = () => {
  useEffect(() => {
    const newWindow = window.open(
      'https://wa.me/79657848378?text=Здравствуйте%2C+у+меня+есть+вопрос',
      '_blank',
    );
    if (newWindow) {
      newWindow.opener = null;
    }
  }, []);

  return null;
};
