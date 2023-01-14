import './App.css'
import Selection from './components/Selections';
import siteLogo from './assets/images/logo.svg';

function App() {

  return (
    <div className="App">
      <header>
        <img src={siteLogo} alt="logo" />
        <section className="score-section">
          <h1>SCORE</h1>
          <h2>0</h2>
        </section>
      </header>
      <Selection />
    </div>
  )
}

export default App
