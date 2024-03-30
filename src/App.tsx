import { Pages } from './types';
import { useRoute } from './hooks/useRoute';
//import { RootPage } from './pages/RootPage';
import { useAppContext } from './hooks/useAppContext';
//import { Button } from './components/UI/Button';

const RootPage = () => <p>root</p>;
const ChatPage = () => <p>chat</p>;
const WhatsappPage = () => <p>WhatsappPage</p>;
const TelegramPage = () => <p>TelegramPage</p>;
const SettingsPage = () => <p>Settings</p>;
const SignupPage = () => <p>Signup</p>;
const SigninPage = () => <p>Signin</p>;

function App() {
  const { Routes, Route } = useRoute();
  const { dispatch } = useAppContext();

  const changePage = (page: Pages) => {
    dispatch({ type: 'SWITCH', payload: page });
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          marginTop: 20,
        }}
      >
        <button onClick={() => changePage(Pages.root)}>"root"</button>
        <button onClick={() => changePage(Pages.chat)}>"chat" </button>
        <button onClick={() => changePage(Pages.whatsapp)}>"whtsapp" </button>
        <button onClick={() => changePage(Pages.telegram)}>"telegram" </button>
        <button onClick={() => changePage(Pages.settings)}>"settings" </button>
        <button onClick={() => changePage(Pages.signin)}>sign in" </button>
        <button onClick={() => changePage(Pages.signup)}>"sign up" </button>
      </div>
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
