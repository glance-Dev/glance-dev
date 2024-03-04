import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebTopics from './components/Topics/WebTopics/webTopics';
import MobTopic from './components/Topics/MobTopics/MobTopic';
import Contact from './components/AboutUs/Contact/Contact';
import FirstContentPage from './components/FirstContentPage/FirstContentPage';

function App() {
  return (
    <>
      {/* <FirstContentPage /> */}
      <WebTopics />
      <MobTopic/>
      <Contact/>
      </>
    
  );
}

export default App;
