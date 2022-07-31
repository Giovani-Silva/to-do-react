import { Rocket } from 'phosphor-react';
import React from 'react';
import styles from './Header.module.css';
function HeaderComponent() {
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

const Header = React.memo(HeaderComponent);
export { Header };
