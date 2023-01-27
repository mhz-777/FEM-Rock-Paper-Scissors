import './App.css'
import Game from './components/Game';
import Rules from './components/Rules';
import siteLogo from './assets/images/logo.svg';
import { useEffect, useState } from 'react';


const App: React.FC = () => {


  //state for game score fetched from local storage
  const [gameScore, setGameScore] = useState(()=> {
    return JSON.parse(localStorage.getItem('gameScore')!) || 0;
  })

  //increase score
  const incrementScore = () =>{
    setGameScore(gameScore + 1);
  }

  //decrease score
  const decrementScore = () => {
    setGameScore(gameScore - 1);
  }

  //store score in local storage using use effect
  useEffect(() => {
    localStorage.setItem('gameScore', JSON.stringify(gameScore));
  }, [gameScore]);


  //state to reveal rules
  const [isClicked, setClicked] = useState<boolean>(false);

  //handle click for rules btn
  const handleClick = () => {
    setClicked(!isClicked);
  }

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <img src={siteLogo} alt="logo" />
          <section className="score-section">
            <h3>SCORE</h3>
            <h1>{gameScore}</h1>
          </section>
        </div>
      </header>
      <main>
        <Game 
          incrementScore={incrementScore}
          decrementScore={decrementScore}
        />
        <Rules
          isClicked={isClicked}
          handleClick = {handleClick}
        />
      </main>
      <footer>
        <button className={`${isClicked === false ? 'rules-btn' : 'rules-btn-hidden'}`}onClick={handleClick}>RULES</button>
      </footer>
    </div>
  )
}

export default App
