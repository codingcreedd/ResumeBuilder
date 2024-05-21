import { useState } from 'react';
import './App.css';
// import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './components/Home.jsx';
import CVBuilder from './components/CVBuilder.jsx';

function App() {

  const [onHome, setOnHome] = useState(true);

  const isHomeCallback = isHome => {
    isHome ? setOnHome(true) : setOnHome(false);
  }

  return (
      <div className='min-h-full App'>
          {
            onHome ? (
              <Home callback={isHomeCallback} />
            ) : (
              <CVBuilder callback={isHomeCallback}/>
            )
          }
      </div>
  );
}

export default App;
