import { useState } from 'react';
import './App.css';
import React, { createContext } from 'react';
import Home from './components/Home.jsx';
import CVBuilder from './components/CVBuilder.jsx';

export const Context = createContext();

// import {Routes, Route, useLocation} from 'react-router-dom';

function App() {

  const [onHome, setOnHome] = useState(true);

  const isHomeCallback = isHome => {
    isHome ? setOnHome(true) : setOnHome(false);
  }

  const [styles, setStyles] = useState({styleOne: true, styleTwo: false});
  const [personalInfo, setPersonalInfo]= useState({firstName: '', lastName: '',
        email: "resumebuilder@gmail.com", phoneNumber: '+961 00 00 00 00', address: "Lebanon, Tripoli"
  });

  const [experience, setExperience] = useState({
    companyName: '', positionTitle: '', startDate: '', endDate: '', location: '', description: ''
  });

  // const [experience, setExperience] = useState([]); //array of objects

  return (
    <Context.Provider value={[styles, setStyles, personalInfo, setPersonalInfo, experience, setExperience]}>
        <div className='min-h-full App'>
            {
              onHome ? (
                <Home callback={isHomeCallback} />
              ) : (
                <CVBuilder callback={isHomeCallback}/>
              )
            }
        </div>
      </Context.Provider>
  );
}

export default App;
