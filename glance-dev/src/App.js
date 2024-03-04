import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return ( 
    <>
    edfmek
   <Router>
   <Header />
   <Routes>
     <Route path="/" element={ <Home/> } />

   </Routes>

   <Footer />

 </Router>
 </>
  );
}

export default App;