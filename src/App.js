import './App.css';
import Forecast from './components/forecast/forecast';
import Logo from './components/logo/logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Steven Dorling
      </footer>
    </div>
  );
}

export default App;
