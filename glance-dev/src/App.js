
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home.js';
import GlanceNavbar from './components/Navbar/GlanceNavbar';
import WebTopics from './components/Topics/WebTopics/webTopics';
import MobTopic from './components/Topics/MobTopics/MobTopic';
import Contact from './components/AboutUs/Contact/Contact.js';
import ParticlesComponent from './components/particales'
import About from './components/AboutUs/About/About.js';
import './App.css'
import NavigationMenu from './components/NavigationMenue/NavigationMenu';
import Material from './components/Material/Material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faHome, faCodeMerge } from '@fortawesome/free-solid-svg-icons';
// import Barclick from './components/Navbar/Barclick';
function App() {
  return (
    <>
    
      <ParticlesComponent id="backgroundCanvas" />
      <GlanceNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/webTopics" element={<WebTopics />}></Route>
        <Route path="/MobTopic" element={<MobTopic />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Content/:name" element={<NavigationMenu/>}></Route>
        <Route path="/Material/:name" element={<Material/>}></Route>
      </Routes>
      <WebTopics />



    </>

  );
}

export default App;