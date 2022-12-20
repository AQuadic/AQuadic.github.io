import './App.css';
import Odometer from './component/Odometer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './component/Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Footer from './component/Footer';

import Job from './component/Job';
import Home from './Home';
import Career from './component/Career';
import Job_details from './component/Job_details';






function App() {
    AOS.init();
    return (
        <div className="App">
            

            <BrowserRouter>
            <img className='chat' src='./images/icons/chat.svg' alt=''/>
                <Nav/>
              
               

                
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/career' element={<Career/>}/>
                    <Route path='/job' element={<Job_details/>}/>
                   
                    <Route path='/three' element={<Odometer/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

            
            
        </div>
    );
}

export default App;
