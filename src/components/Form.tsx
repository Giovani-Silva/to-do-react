import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IListItem } from '../models/list.model';
import styles from './Form.module.css';

interface FormProps {
  list: IListItem[];
  setList: React.Dispatch<React.SetStateAction<IListItem[]>>;
}

export function Form({ list, setList }: FormProps) {
  const [text, setText] = useState('');

  function handleSubmit() {
    event.preventDefault();
    console.log(text);
    setList((state) => [
      ...state,
      {
        id: uuidv4(),
        text,
        startDate: new Date(),
      },
    ]);

    setText('');
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" value={text} onChange={(event) => setText(event.target.value)} />
      <button disabled={!text}>
        Criar <PlusCircle size={24} />
      </button>
    </form>
  );
}
