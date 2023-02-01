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
import Portfolio from './component/Portfolio';

import data from './data/projects.json'
import Target_Project from './component/Target_Project';
import Jop_About from './component/Job_About';
import ScrollToTop from './component/ScrollToTop';
import { Provider, useSelector } from 'react-redux';
import store from './data/dataSlice';
import Po_ta from './component/Po_ta';
import Home_lay from './component/Home_lay';




function App() {
    // <img className='chat' src='./images/icons/chat.svg' alt=''/>
    AOS.init();

    return (
        <Provider store={store}>

      
        <div className="App">
            

            <BrowserRouter>
           <ScrollToTop/>
               
              
               

                
                <Routes>
                    <Route path='/' element={<Home_lay/>}>
                    <Route index element={<Home />} />
                    <Route path='career' element={<Career/>}/>
                    <Route path='job' element={<Job_details/>}/>
                    <Route path='hosting' element={<Hosting/>}/>
                    <Route path='time_model' element={<Time_Model/>}/>
                    <Route path='team' element={<Team/>}/>
                    <Route path='person' element={<Persone/>}/>
                    <Route path='portfolio' element={<Po_ta/>}>
                    <Route index element={<Portfolio data={data}/>} />
                    <Route path='target-project' element={<Target_Project data={data} />}/>
                    </Route>
                    <Route path='job_about' element={<Jop_About />}/>
                    </Route>

                </Routes>
                
            </BrowserRouter>
            
            
            
        </div>
        </Provider>
    );
}

export default App;
