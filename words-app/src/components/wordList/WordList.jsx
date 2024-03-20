import React, { useState, useEffect } from 'react';
import WordCard from '../wordcard/WordCard.jsx'; // Предполагается, что у вас есть компонент WordCard
import styles from './WordList.module.css';

function WordList() {
  const [wordList, setWordList] = useState([]); // Состояние для списка слов

  // Функция для загрузки списка слов из API
  const fetchWordList = async () => {
    try {
      const response = await fetch('https://itgirlschool.justmakeit.ru/api/words');
      const data = await response.json();
      setWordList(data); // Устанавливаем полученный список слов в состояние
    } catch (error) {
      console.error('Error fetching word list:', error);
    }
  };

  // Выполняем загрузку списка слов при монтировании компонента
  useEffect(() => {
    fetchWordList();
  }, []);

  return (
    <div className={styles.wordList}>
      {wordList.map((word, index) => (
        <WordCard key={index} wordData={word} />
      ))}
    </div>
  );
}

export default WordList;
