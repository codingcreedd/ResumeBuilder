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

  const [education, setEducation] = useState({
    uni: 'Uni', degree: 'Degree', startDate: '2024', endDate: '2025', location: 'Tripoli, Lebanon'
  }); //array of objects

  const [download, setDownload] = useState(false);

  return (
    <Context.Provider value={{styles, setStyles, personalInfo, setPersonalInfo, experience, setExperience, education, setEducation, download, setDownload}}>
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
