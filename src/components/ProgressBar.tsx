import styles from './ProgressBar.module.css';

export function ProgressBar({ tasks = 0, completed = 0 }) {
  return (
    <nav className={styles.nav}>
      <span>
        Tarefas criadas <small>{tasks}</small>
      </span>
      <span>
        Concluídas{' '}
        <small>
          {completed} de {tasks}
        </small>
      </span>
    </nav>
  );
}
