import React, { useState, useEffect } from 'react';
import styles from './WordCard.module.css';

function WordCard() {
  const [wordData, setWordData] = useState(null); // Состояние для данных слова
  const [isFlipped, setIsFlipped] = useState(false); // Состояние для переворота карточки

  // Функция для загрузки данных слова из API
  const fetchWordData = async () => {
    try {
      const response = await fetch('https://itgirlschool.justmakeit.ru/api/words');
      const data = await response.json();
      const randomWord = data[Math.floor(Math.random() * data.length)]; // Выбираем случайное слово из полученных данных
      setWordData(randomWord); // Устанавливаем полученные данные в состояние
    } catch (error) {
      console.error('Error fetching word data:', error);
    }
  };

  // Выполняем загрузку данных слова при монтировании компонента
  useEffect(() => {
    fetchWordData();
  }, []);

  // Обработчик клика для переворачивания карточки
  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // Переключаем состояние переворота
  };

  // Если данные слова еще не загружены, отображаем загрузочный индикатор
  if (!wordData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`${styles.wordCardContent} ${isFlipped ? styles.flipped : ''}`}
      onClick={handleCardClick}
    >
      <div className={styles.front}>
        <h3>{wordData.english}</h3>
      </div>
      <div className={styles.back}>
        <p><strong>Транскрипция:</strong> {wordData.transcription}</p>
        <p><strong>Перевод:</strong> {wordData.russian}</p>
        <p><strong>Тема:</strong> {wordData.tags}</p>
      </div>
    </div>
  );
}

export default WordCard;
