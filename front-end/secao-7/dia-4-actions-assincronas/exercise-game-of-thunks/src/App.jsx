import './App.css';
import CharacterCard from './components/CharacterCard';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <CharacterCard />
    </div>
  );
}

export default App;
