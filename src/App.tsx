import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EmptyMessage } from './components/EmptyMessage';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';
import { ProgressBar } from './components/ProgressBar';
import { IListItem } from './models/list.model';

export function App() {
  const [list, setList] = useState<IListItem[]>([
    {
      id: uuidv4(),
      text: 'Lorem ipsum dolor sit amet, integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      startDate: new Date(),
    },
    {
      id: uuidv4(),
      text: 'Lorem ipsum dolor sit amet, integer urna interdum massa libero auctor neque turpis turpis semper.',
      startDate: new Date(),
    },
    {
      id: uuidv4(),
      text: 'Lorem ipsum dolor sit amet,  Duis vel sed fames integer.',
      startDate: new Date(),
      completeDate: new Date(),
    },
    {
      id: uuidv4(),
      text: 'Lorem ipsum dolor sit amet,  Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      startDate: new Date(),
    },
    {
      id: uuidv4(),
      text: 'Lorem ipsum dolor sit amet',
      startDate: new Date(),
    },
  ]);

  const completed = list.filter((item) => item.completeDate).length;
  return (
    <>
      <Header />
      <Form />
      <ProgressBar tasks={list.length} completed={completed} />
      {!list.length ? <EmptyMessage /> : <List list={list} setList={setList} />}
    </>
  );
}
