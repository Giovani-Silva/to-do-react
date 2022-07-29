import styles from './ProgressBar.module.css';

export function ProgressBar() {
  return (
    <nav className={styles.nav}>
      <span>
        Tarefas criadas <small>5</small>
      </span>
      <span>
        Concluídas <small>0 de 5</small>
      </span>
    </nav>
  );
}
