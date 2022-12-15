import logo from './logo.svg';
import './App.css';
import Odometer from './component/Odometer';
import Clients from './component/Clients';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Join from './component/Join';
import { Container } from 'react-bootstrap';
import Imageheder from './component/Imageheder';
import Advantages from './component/Advantages';
import Footer from './component/Footer';
import Animation1 from './component/Animation1';
import Positions from './component/Positions';
import Forminfo from './component/Forminfo';

function App() {
  AOS.init();
  return (
    <div className="App">
  <img className='chat' src='./images/Group 4.svg' alt=''/>
       
    <BrowserRouter>
    <Nav/>
    <Animation1/>
  <Imageheder/>
    <Join/>
<Advantages/>
     <Routes>
       <Route path='/'  element={<Clients   />}/>
       <Route path='/tow' element={<Clients />}/>
       <Route path='/three' element={<Odometer />}/>
     </Routes>
     </BrowserRouter>

    <Positions/>
      <Odometer/>
    <Forminfo/>
      <Clients/>
     <Footer/>
    </div>
  );
}

export default App;
