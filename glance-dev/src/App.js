import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
   <Router>
   <Header />
   <Home/>
   <Routes>
     <Route path="/" element={ <Home/> } />
     <Route path="about" element={ <About/> } />
     <Route path="contact" element={ <Contact/> } />
   </Routes>

   <Footer />

 </Router>
  );
}

export default App;