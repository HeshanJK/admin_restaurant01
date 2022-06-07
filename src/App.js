import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Home from './Admin_screens/Home';
import Viewfood from './Admin_screens/Viewfood';
import Addfood from './Admin_screens/Addfood';
import Offers from './Admin_screens/Offers';

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
