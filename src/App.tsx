import { Pages } from './types';
import { useRoute } from './hooks/useRoute';
//import { RootPage } from './pages/RootPage';
import { useAppContext } from './hooks/useAppContext';
import { Button } from './components/UI/Button';

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
        <Button onClick={() => changePage(Pages.root)} text="root" />
        <Button onClick={() => changePage(Pages.chat)} text="chat" />
        <Button onClick={() => changePage(Pages.whatsapp)} text="whtsapp" />
        <Button onClick={() => changePage(Pages.telegram)} text="telegram" />
        <Button onClick={() => changePage(Pages.settings)} text="settings" />
        <Button onClick={() => changePage(Pages.signin)} text="sign in" />
        <Button onClick={() => changePage(Pages.signup)} text="sign up" />
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
