import { Rocket } from 'phosphor-react';
import styles from './Header.module.css';
export function Header() {
  return (
    <header className={styles.header}>
      <Rocket size={36} />
      <h1>
        <span>To</span>
        <span>Do</span>
      </h1>
    </header>
  );
}
