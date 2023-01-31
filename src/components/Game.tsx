import React, {useEffect, useState } from 'react';
import './Game.css';

interface gameProps {
    incrementScore: () => void;
    decrementScore: () => void;
}

const Game: React.FC<gameProps> = ({incrementScore, decrementScore}) => {

    // store user and cpu choices in state
    const [userSelect, applySelect] = useState<string>('');
    const [cpuSelect, applyCpuChoice] = useState<string>('');

    // state for when to hide/show sections
    const [userReady, setUserReady] = useState(false);
    const [cpuReady, setCpuReady] = useState(false);

    //state for final game decision
    const [gameResult, setGameResult] = useState<string>('');

    //state for dynamic classname
    const [dynamicClass, setDynamicClass] = useState<string>('');


    // store state, decide cpu move
    const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        applySelect(event.currentTarget.id);
        setUserReady(true);
        setTimeout(cpuRandomizer, 1500);
    }

    // determine game result when both states are ready
    useEffect(()=>{
        if(userReady == true && cpuReady == true){
            gameDecider();
            setDynamicClass('dynamic-shadow');
        }
    }, [userReady, cpuReady]);

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


    const gameDecider = () => {
        if(userSelect === cpuSelect){
            setGameResult('tie');
        }else if(userSelect === 'paper' && cpuSelect === 'rock'){
            setGameResult('win');
            incrementScore();
        }else if(userSelect === 'scissors' && cpuSelect === 'paper'){
            setGameResult('win');
            incrementScore();
        }else if(userSelect === 'rock' && cpuSelect === 'scissors'){
            setGameResult('win');
            incrementScore();
        }else {
            setGameResult('loss');
            decrementScore();
        }
    }

    const resetGame = () => {
        applySelect('');
        applyCpuChoice('');
        setUserReady(false);
        setCpuReady(false);
        setGameResult('');
        setDynamicClass('');
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
                        <div className={`btn-wrapper ${dynamicClass}`} id="wrapper-paper">
                            <button className="paper-btn" id="paper"></button>
                        </div>
                    }
                    {userSelect === 'scissors' &&
                        <div className={`btn-wrapper ${dynamicClass}`} id="wrapper-scissors">
                            <button className="scissors-btn" id="scissors"></button>
                        </div>
                    }
                    {userSelect === 'rock' &&
                        <div className={`btn-wrapper ${dynamicClass}`} id="wrapper-rock">
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
            <section className="game-results-cta">
                    {gameResult === 'win' &&
                        <div className="result-message-container">
                            <p className="result-message">YOU WIN!</p>
                            <button className="replay-btn" onClick={resetGame}>PLAY AGAIN</button>
                        </div>
                    }
                    {gameResult === 'loss' && 
                        <div className="result-message-container">
                            <p className="result-message">YOU LOSE!</p>
                            <button className="replay-btn" onClick={resetGame}>PLAY AGAIN</button>
                        </div>
                    }
                    {gameResult === 'tie' && 
                        <div className="result-message-container">
                            <p className="result-message">IT'S A TIE!</p>
                            <button className="replay-btn" onClick={resetGame}>PLAY AGAIN</button>
                        </div>
                    }
            </section>
        </section>
    );
}

export default Game;