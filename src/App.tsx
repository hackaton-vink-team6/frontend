import { Pages } from './types';
import { useRoute } from './hooks/useRoute';
import { RootPage } from './pages/RootPage';
import { ChatPage } from './pages/ChatPage';
import { TelegramPage } from './pages/TelegramPage';
import { WhatsappPage } from './pages/WhatsappPage';
import { Overlay } from './components/Overlay';

function App() {
  const { Routes, Route } = useRoute();

  return (
    <>
      <Routes>
        <Route path={Pages.root} component={RootPage} />
        <Route path={Pages.chat} component={ChatPage} />
        <Route path={Pages.whatsapp} component={WhatsappPage} />
        <Route path={Pages.telegram} component={TelegramPage} />
      </Routes>
      <Overlay />
    </>
  );
}

export default App;
