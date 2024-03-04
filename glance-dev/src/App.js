
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import WebTopics from './components/Topics/WebTopics/webTopics';
import MobTopic from './components/Topics/MobTopics/MobTopic';
import Contact from './components/AboutUs/Contact/Contact';

function App() {
  return (
    <>

        <Home />
        <WebTopics />
        <MobTopic />
        <Contact />
        
      
    </>

  );
}

export default App;