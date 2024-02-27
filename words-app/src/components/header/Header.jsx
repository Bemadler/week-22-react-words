import React from 'react';
import './Header.css';

function Header() {
return (
    <header className="header">
    <div className="logo">ЛОГО</div>
        <nav>
            <a href="/">Главная</a>
            <a href="/word-list">Список слов</a>
            <a href="/add-word">Добавить слово</a>
        </nav>
    </header>
);
}

export default Header;
