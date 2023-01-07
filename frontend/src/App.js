import './App.css';
import React  from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes,Route} from 'react-router-dom';
import Home from "./pages/Home"
import HorosCopeDetails from "./pages/HoroscopeDetails"

function App() {
  return (
    <>
     <Header> </Header>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:zodiacName' element={<HorosCopeDetails />} />
     </Routes>
     <Footer> </Footer>
     </>
  );
}

export default App;
