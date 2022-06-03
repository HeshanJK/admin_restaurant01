import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Home from './screens/Home';
import Viewfood from './screens/Viewfood';
import Addfood from './screens/Addfood';
import Offers from './screens/Offers';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div >
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/viewfood' element={<Viewfood />} />
          <Route path='/addfood' element={<Addfood />} />
          <Route path='/offers' element={<Offers />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
