import { EmptyMessage } from './components/EmptyMessage';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';
import { ProgressBar } from './components/ProgressBar';

export function App() {
  return (
    <>
      <Header />
      <Form />
      <ProgressBar />
      <EmptyMessage />
      <List />
    </>
  );
}
