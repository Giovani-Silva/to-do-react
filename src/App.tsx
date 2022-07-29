import { ClipboardText, PlusCircle, Trash } from 'phosphor-react';
import styles from './App.module.css';
import { Header } from './components/Header';

export function App() {
  return (
    <>
      <Header />
      <form action="" className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <PlusCircle size={24} />
        </button>
      </form>
      <nav className={styles.nav}>
        <span>
          Tarefas criadas <small>0</small>
        </span>
        <span>
          Concluídas <small>0</small>
        </span>
      </nav>

      <div className={styles.empty}>
        <ClipboardText size={56} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

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
    </>
  );
}
