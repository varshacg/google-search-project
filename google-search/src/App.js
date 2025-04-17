import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SearchBox from './components/SearchBox';
import Results from './components/Results';
import './App.css';

function App() {
  
  
  return (
    <Router>
       <div className="App">
       
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google logo" />
          <Routes>
             <Route path="/" element={<SearchBox />}/>
             <Route path="/search" element={<Results />}/>
          </Routes>
       
       </div>
    </Router>
  );
}

export default App;
