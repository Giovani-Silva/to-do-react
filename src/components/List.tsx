import { intervalToDuration } from 'date-fns';
import { Trash } from 'phosphor-react';
import { IListItem } from '../models/list.model';
import styles from './List.module.css';

interface ListProps {
  list: IListItem[];
  setList: React.Dispatch<React.SetStateAction<IListItem[]>>;
}

export function List(props: ListProps) {
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

  function durationTask(start: Date): string {
    interface DurationTime {
      years?: number;
      months?: number;
      weeks?: number;
      days?: number;
      hours?: number;
      minutes?: number;
      seconds?: number;
    }

    const label = {
      years: 'ano(zzzz)',
      months: 'mezzz(ezz)',
      weeks: 'semana(s)',
      days: 'd',
      hours: 'h',
      minutes: 'm',
      seconds: 's',
    };
    const duration = intervalToDuration({
      start: start,
      end: new Date(),
    }) as DurationTime;

    let result = '';

    for (let key in duration) {
      if (!result && duration[key as keyof DurationTime]) {
        result += `${duration[key as keyof DurationTime]}${label[key as keyof DurationTime]} `;
      }
    }

    if (!result) result = '0s';
    return result;
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
              <button className={styles.delete} title="delete" onClick={() => handleDeleteItem(id)}>
                <Trash size={18} />
              </button>
            </div>
            {completeDate && <small className={styles.time}>concluído a {durationTask(completeDate)}</small>}
            {!completeDate && <small className={styles.time}>adicionado a {durationTask(startDate)}</small>}
          </li>
        );
      })}
    </ul>
  );
}
