import { PlusCircle } from 'phosphor-react';
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
    </>
  );
}
