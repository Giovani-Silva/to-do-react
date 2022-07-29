import { ClipboardText } from 'phosphor-react';
import styles from './EmptyMessage.module.css';

export function EmptyMessage() {
  return (
    <div className={styles.empty}>
      <ClipboardText size={56} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
