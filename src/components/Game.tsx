import React, { useState } from 'react';
import './Game.css';
import paperIcon from '../assets/images/icon-paper.svg';

const Game = () => {

    // store user and cpu choices in state
    const [userSelect, applySelect] = useState('');
    const [cpuSelect, applyCpuChoice] = useState('');

    // state for when to hide/show sections
    const [userReady, setUserReady] = useState(false);
    const [cpuReady, setCpuReady] = useState(false);

    //state for final game decision
    const [gameResult, setGameResult] = useState('');

    // store state, decide cpu move
    const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        applySelect(event.currentTarget.id);
        setUserReady(true);
        setTimeout(cpuRandomizer, 3000);
    }

    // function to decide cpu move
    const cpuRandomizer = () => {
        let cpuChoice = Math.floor(Math.random() * 3);
        if(cpuChoice == 0){
            applyCpuChoice('paper');
        }else if (cpuChoice == 1) {
            applyCpuChoice('rock');
        }else{
            applyCpuChoice('scissors');
        }
        setCpuReady(true);
    }
    

    return (
        <section className="game-container">
            <section className={`game-selections ${userReady === false ? "" : 'hidden'}`}>
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
            <section className={`${userReady === true ? "game-results-container " : 'game-results-container-hidden'}`}>
                <section className="game-results-user">
                    {userSelect === 'paper' &&
                        <div className="btn-wrapper" id="wrapper-paper">
                            <button className="paper-btn" id="paper"></button>
                        </div>
                    }
                    {userSelect === 'scissors' &&
                        <div className="btn-wrapper" id="wrapper-scissors">
                            <button className="scissors-btn" id="scissors"></button>
                        </div>
                    }
                    {userSelect === 'rock' &&
                        <div className="btn-wrapper" id="wrapper-rock">
                            <button className="rock-btn" id="rock"></button>
                        </div>
                    }
                    
                    <h2 className="result-heading">YOU PICKED</h2>
                </section>
                <section className={`${cpuReady === false ? 'game-results-blank' : 'game-results-blank-hidden'}`}>
                    <div className="btn-wrapper" id="wrapper-blank"></div>
                    <h2 className="result-heading">THE HOUSE PICKED</h2>
                </section>
                <section className={`${cpuReady === true ? 'game-results-house' : 'game-results-house-hidden'}`}>
                    {cpuSelect === 'paper' &&
                        <div className="btn-wrapper" id="wrapper-paper">
                            <button className="paper-btn" id="paper"></button>
                        </div>
                    }
                    {cpuSelect === 'scissors' &&
                        <div className="btn-wrapper" id="wrapper-scissors">
                            <button className="scissors-btn" id="scissors"></button>
                        </div>
                    }
                    {cpuSelect === 'rock' &&
                        <div className="btn-wrapper" id="wrapper-rock">
                            <button className="rock-btn" id="rock"></button>
                        </div>
                    }
                    <h2 className="result-heading">THE HOUSE PICKED</h2>
                </section>
            </section>
        </section>
    );
}

export default Game;