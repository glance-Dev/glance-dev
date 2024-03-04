import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Courses from './components/courses/Courses';




function App() {
  return (
    <>
      <Courses />
    </>
  );
}

export default App;