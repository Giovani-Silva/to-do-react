import { Trash } from 'phosphor-react';
import { IListItem } from '../models/list.model';
import styles from './List.module.css';

export function List(props: any) {
  const { list, setList } = props;

  function handleToogleCheckItem(id) {
    const isChecked = event?.target?.checked as React.ChangeEvent<HTMLInputElement>;

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

  function handleDeleteItem(id) {
    const newList = list.filter((item: IListItem) => item.id !== id);
    setList(newList);
  }

  return (
    <ul className={styles.toDoList}>
      {list.map(({ id, text, startDate, completeDate }: IListItem) => {
        return (
          <li key={id} className={completeDate ? styles.complete : ''}>
            <input
              className={styles.checkInput}
              type="checkbox"
              id={id}
              checked={!!completeDate}
              onChange={() => handleToogleCheckItem(id)}
            />
            <label className={styles.checkLabel} htmlFor={id}></label>
            <span className={styles.task}>{text}</span>
            <button className={styles.delete} title="delete" onClick={() => handleDeleteItem(id)}>
              <Trash size={18} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
