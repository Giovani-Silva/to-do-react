import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Trash } from 'phosphor-react';
import { IListItem } from '../models/list.model';
import styles from './List.module.css';

type isChecked = 'on' | 'off';

interface ListProps {
  list: IListItem[];
  updateItemToDoList: (isChecked: boolean, id: string) => void;
  removeItemToDoList: (id: string) => void;
}

export function List({ list, updateItemToDoList, removeItemToDoList }: ListProps) {
  function handleToogleCheckItem(id: string) {
    let isChecked = false;
    if (window.event) {
      isChecked = (window.event.target as HTMLInputElement).checked;
    }

    updateItemToDoList(isChecked, id);
  }

  return (
    <ul className={styles.toDoList}>
      {list.map(({ id, text, startDate, completeDate }: IListItem) => {
        return (
          <li key={id} className={completeDate ? styles.complete : ''}>
            <div className={styles.wrapper}>
              <input
                className={styles.checkInput}
                type="checkbox"
                id={id}
                checked={!!completeDate}
                onChange={() => handleToogleCheckItem(id)}
              />
              <label className={styles.checkLabel} htmlFor={id}></label>
              <span className={styles.task}>{text}</span>
              <button className={styles.delete} title="delete" onClick={() => removeItemToDoList(id)}>
                <Trash size={18} />
              </button>
            </div>
            {completeDate && (
              <small className={styles.time}>
                concluído {formatDistanceToNow(new Date(completeDate).getTime(), { addSuffix: true, locale: ptBR })}
              </small>
            )}
            {!completeDate && (
              <small className={styles.time}>
                adicionado {formatDistanceToNow(new Date(startDate).getTime(), { addSuffix: true, locale: ptBR })}
              </small>
            )}
          </li>
        );
      })}
    </ul>
  );
}
