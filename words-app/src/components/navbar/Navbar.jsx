import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.logo}><a img="" src=""></a></li>
        <li className={styles.navMain}><a href="">Главная</a></li>
        <li className={styles.navWordList}><a href="">Список слов</a></li>
        <li className={styles.navAddWord}><a href="">Добавить слово</a></li>
        <li className={styles.navLogin}><a href="">Войти</a></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
