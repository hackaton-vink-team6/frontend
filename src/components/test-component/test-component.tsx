import ChatHeader from '../chat-header/chat-header';
import testComponentStyles from './test-component.module.css';
import { ChatMessage } from '@/components/ChatMessage';

interface ITestComponentProps {}

const TestComponent: React.FC<ITestComponentProps> = (): JSX.Element => {
  return (
    <div className={testComponentStyles.test}>
      <ChatHeader />
      <ChatMessage
        author="Бот"
        text="Hi there, how can I help you"
        isOutgoing={false}
      />
      <ChatMessage
        author="Пользователь"
        text="Lorem ipsum dolor sit amet consectetur"
        isOutgoing={true}
      />
    </div>
  );
};

export default TestComponent;
