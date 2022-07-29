import { Trash } from 'phosphor-react';
import styles from './List.module.css';
export function List() {
  return (
    <ul className={styles.toDoList}>
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <li key="item">
            <input className={styles.checkInput} type="checkbox" id={'check-' + item} />
            <label className={styles.checkLabel} htmlFor={'check-' + item}></label>
            <span className={styles.task}>
              Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </span>
            <button className={styles.delete} title="delete">
              <Trash size={18} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
