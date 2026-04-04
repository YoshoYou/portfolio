import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import './App.css'
// import UseWindowSize from './components/WindowSize/UseWindowSize';
import { Skills } from "./components/Skills/Skills";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";
import { ContactMe } from "./components/ContactMe/ContactMe";
// import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import MyRepo from "./components/GH-pages/MyRepo";
import License from "./components/License/License";
function App ()
{
  return (
    <div className="App">
      <Navbar />
      <div className="container">
          <Hero/>
        <Skills />
          <WorkExperience /> 
          <License />
        <MyRepo />
        <ContactMe />
      </div>
      <Footer/>
      </div>
  );
}
export default App;
