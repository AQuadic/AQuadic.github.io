import './App.css';
import Odometer from './component/Odometer';
import Clients from './component/Clients';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './component/Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Join from './component/Join';
import Imageheder from './component/Imageheder';
import Advantages from './component/Advantages';
import Footer from './component/Footer';
import Animation1 from './component/Animation1';
import Positions from './component/Positions';
import Forminfo from './component/Forminfo';
import Projects from './component/Projects';
import Job from './component/Job';
import Technologies from './component/Technologies';
import About from './component/About';
import Testimonials from './component/Testimonials';
import Message from './component/Message';
import Services from './component/Services';

function App() {
    AOS.init();
    return (
        <div className="App">
            <img className='chat' src='./images/icons/chat.svg' alt=''/>

            <BrowserRouter>
                <Nav/>
                <Animation1/>
                <About/>
                <Odometer/>
                <Services/>
                <Projects/>
                <Technologies/>
                <Clients/>
                <Testimonials/>
                <Message/>
                <Imageheder/>
                <Join/>
                <Job/>

                <Advantages/>
                <Routes>
                    <Route path='/' element={<Clients/>}/>
                    <Route path='/tow' element={<Clients/>}/>
                    <Route path='/three' element={<Odometer/>}/>
                </Routes>
            </BrowserRouter>

            <Positions/>

            <Forminfo/>

            <Footer/>
        </div>
    );
}

export default App;
