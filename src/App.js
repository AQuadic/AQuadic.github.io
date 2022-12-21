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
import Hosting from './component/Hosting';
import Time_Model from './component/Time_Model';
import Team from './component/Team';
import Persone from './component/Persone';






function App() {
    // <img className='chat' src='./images/icons/chat.svg' alt=''/>
    AOS.init();
    return (
        <div className="App">
            

            <BrowserRouter>
           
                <Nav/>
              
               

                
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/career' element={<Career/>}/>
                    <Route path='/job' element={<Job_details/>}/>
                    <Route path='/hosting' element={<Hosting/>}/>
                    <Route path='/time_model' element={<Time_Model/>}/>
                    <Route path='/team' element={<Team/>}/>
                    <Route path='/person' element={<Persone/>}/>




                   
                    <Route path='/three' element={<Odometer/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

            
            
        </div>
    );
}

export default App;
