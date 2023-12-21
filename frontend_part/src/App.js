import './App.css';
import Admin from './Admin';
import Movielist from './Movielist';
import Movies from './Movies';
import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Movielist/>}></Route>
        <Route exact path='/admin' element={<Admin/>}></Route>
        <Route exact path='/movies/:name' element={<Movies/>}></Route>
        <Route exact path='*' element={<Movielist/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
