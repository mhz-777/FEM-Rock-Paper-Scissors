import './App.css'
import Game from './components/Game';
import siteLogo from './assets/images/logo.svg';

function App() {

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <img src={siteLogo} alt="logo" />
          <section className="score-section">
            <h3>SCORE</h3>
            <h1>0</h1>
          </section>
        </div>
      </header>
      <main>
        <Game />
      </main>
    </div>
  )
}

export default App
