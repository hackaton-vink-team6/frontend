import ChatHeader from '../chat-header/chat-header';
import testComponentStyles from './test-component.module.css';

interface ITestComponentProps {}

const TestComponent: React.FC<ITestComponentProps> = (): JSX.Element => {
  return (
    <div className={testComponentStyles.test}>
      <ChatHeader />
    </div>
  );
};

export default TestComponent;
