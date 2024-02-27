import React from 'react';
import './WordCard.css';

function WordCard({ mainValue, transcription, translation, theme }) {
return (
    <div className="word-card">
        <h3>{mainValue}</h3>
        <p><strong>Транскрипция:</strong> {transcription}</p>
        <p><strong>Перевод:</strong> {translation}</p>
        <p><strong>Тема:</strong> {theme}</p>
    </div>
);
}

export default WordCard;
