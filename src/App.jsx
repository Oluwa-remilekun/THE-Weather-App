import Header from './components/Header';
import './App.css';

function App() {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
    </>
  );
}

export default App;
