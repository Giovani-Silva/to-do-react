import { Trash } from 'phosphor-react';
import { IListItem } from '../models/list.model';
import styles from './List.module.css';
export function List({ list }) {
  return (
    <ul className={styles.toDoList}>
      {list.map(({ id, text, startDate, completeDate }: IListItem) => {
        return (
          <li key={id} className={completeDate ? styles.complete : ''}>
            <input className={styles.checkInput} type="checkbox" id={id} checked={!!completeDate} />
            <label className={styles.checkLabel} htmlFor={id}></label>
            <span className={styles.task}>{text}</span>
            <button className={styles.delete} title="delete">
              <Trash size={18} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
