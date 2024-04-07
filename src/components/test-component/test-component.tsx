import { ChatBody } from '../ChatBody';
import { ChatFooter } from '../ChatFooter';
import ChatHeader from '../chat-header/chat-header';
import testComponentStyles from './test-component.module.css';
//import { ChatMessage } from '@/components/ChatMessage';

interface ITestComponentProps {}

const TestComponent: React.FC<ITestComponentProps> = (): JSX.Element => {
  return (
    <div className={testComponentStyles.test}>
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default TestComponent;
