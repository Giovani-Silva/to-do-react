import { PlusCircle } from 'phosphor-react';
import styles from './Form.module.css';

export function Form() {
  return (
    <form action="" className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={24} />
      </button>
    </form>
  );
}
