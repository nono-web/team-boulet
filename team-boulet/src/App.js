import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Materials from './Components/Materials/Materials';
import Options from './Components/Options/Options';
import CrossSelling from './Components/CrossSelling/CrossSelling';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/materials' element={<Materials />} />
          <Route path='/options' element={<Options />} />
          <Route path='/cross-selling' element={<CrossSelling />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
