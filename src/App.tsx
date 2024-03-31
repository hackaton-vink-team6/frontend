import { Pages } from './types';
import { useRoute } from './hooks/useRoute';
import { RootPage } from './pages/RootPage';

//const RootPage = () => <p>root</p>;
const ChatPage = () => <p>chat</p>;
const WhatsappPage = () => <p>WhatsappPage</p>;
const TelegramPage = () => <p>TelegramPage</p>;
const SettingsPage = () => <p>Settings</p>;
const SignupPage = () => <p>Signup</p>;
const SigninPage = () => <p>Signin</p>;

function App() {
  const { Routes, Route } = useRoute();
  
  return (
    <>
      <Routes>
        <Route path={Pages.root} component={RootPage} />
        <Route path={Pages.chat} component={ChatPage} />
        <Route path={Pages.whatsapp} component={WhatsappPage} />
        <Route path={Pages.telegram} component={TelegramPage} />
        <Route path={Pages.settings} component={SettingsPage} />
        <Route path={Pages.signup} component={SignupPage} />
        <Route path={Pages.signin} component={SigninPage} />
      </Routes>
    </>
  );
}

export default App;
