import { useState } from 'react';

import { EmptyMessage } from './components/EmptyMessage';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';
import { ProgressBar } from './components/ProgressBar';
import { IListItem } from './models/list.model';

export function App() {
  const [list, setList] = useState<IListItem[]>([]);

  const completed = list.filter((item) => item.completeDate).length;
  return (
    <>
      <Header />
      <Form list={list} setList={setList} />
      <ProgressBar tasks={list.length} completed={completed} />
      {!list.length ? <EmptyMessage /> : <List list={list} setList={setList} />}
    </>
  );
}
