import React from 'react';
import './WordList.css';
import WordCard from './WordCard'; 

function WordList({ words }) {
return (
    <div className="word-list">
        {words.map((word, index) => (
            <WordCard key={index} {...word} />
        ))}
    </div>
);
}

export default WordList;
