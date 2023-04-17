import './App.css';
import Formgame from './components/Formgame';
import Games from './components/Games';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Formgame/>
      <Games />
    </div>
  );
}

export default App;
