
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Header from './component/Header';
import FavList from './component/FavList';
import {Routes , Route} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Faverit' element={<FavList />}/>
    </Routes>
    
    </>
  );
}

export default App;
