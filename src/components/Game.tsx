import React, { useState } from 'react';
import './Game.css';

const Game = () => {

    const [userSelect, applySelect] = useState('');
    const [isReady, setReady] = useState(false);

    const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        applySelect(event.currentTarget.id);
        setReady(true);
    }

    const cpuRandomizer = () => {
        let cpuChoice = Math.floor(Math.random() * 3);
        console.log(cpuChoice);
        
    }

    return (
        <section className="game-container">
            <section className="game-selections">
                <div className="btn-wrapper" id='wrapper-paper'>
                    <button className="paper-btn" id="paper" onClick={handleUserClick}> </button>
                </div>
                <div className="btn-wrapper" id='wrapper-scissors'>
                    <button className="scissors-btn" id="scissors" onClick={handleUserClick}></button>
                </div>
                <div className="btn-wrapper" id='wrapper-rock'>
                    <button className="rock-btn" id='rock' onClick={handleUserClick}></button>
                </div>
            </section>
        </section>
    );
}

export default Game;