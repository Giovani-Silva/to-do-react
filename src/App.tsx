import { useState } from 'react';

import { EmptyMessage } from './components/EmptyMessage';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';
import { ProgressBar } from './components/ProgressBar';
import { IListItem } from './models/list.model';

export function App() {
  const [list, setList] = useState<IListItem[]>([]);

  function addItemToDoList(item: IListItem) {
    setList((state) => [...state, item]);
  }

  function updateItemToDoList(isChecked: boolean, id: string) {
    const updatedList = list.map((item: IListItem) => {
      if (isChecked && id === item.id) {
        item.completeDate = new Date();
      }

      if (!isChecked && id === item.id) {
        delete item.completeDate;
      }

      return item;
    });
    setList(updatedList);
  }

  function removeItemToDoList(id: string) {
    const newList = list.filter((item: IListItem) => item.id !== id);
    setList(newList);
  }

  const completed = list.filter((item) => item.completeDate).length;
  return (
    <>
      <Header />
      <Form list={list} addItemToDoList={addItemToDoList} />
      <ProgressBar tasks={list.length} completed={completed} />
      {!list.length ? (
        <EmptyMessage />
      ) : (
        <List list={list} updateItemToDoList={updateItemToDoList} removeItemToDoList={removeItemToDoList} />
      )}
    </>
  );
}
