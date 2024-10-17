import furioza from './pobrane.jfif';
import scooby from './hej.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Repertuar Kinowy

        <img src={furioza} className="App-logo" alt="logo"/>
        <p>
          Tytuł: Furioza
        </p>
        <p2>
          Gatunek: Akcja, powieść kryminalna
        </p2>
        <p3>
          Godziny Wyświetlania: 20:00, 22:30
        </p3>
        <img src={scooby} className="App-logo" alt="logo"/>
        <p>
          Tytuł: Scooby Doo! Mystery Inc
        </p>
        <p2>
          Gatunek: Akcja, animowany
        </p2>
        <p3>
          Godziny Wyświetlania: 12:00, 25:30
        </p3>
      </header>
    </div>
  );
}

export default App;
