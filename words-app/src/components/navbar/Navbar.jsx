import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Главная</a></li>
        <li className="nav-item"><a href="/word-list">Список слов</a></li>
        <li className="nav-item"><a href="/add-word">Добавить слово</a></li>
        <li className="nav-item"><a href="/login">Войти</a></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
