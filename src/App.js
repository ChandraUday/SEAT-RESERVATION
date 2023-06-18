import React from 'react';
import Coach from './Coach';
import './App.css';
import Header from './Header';


function App() {
  return (
    
    <div style={{color:"blue"}} className="App">
    <Header/>
     <h1 style={{color:"red"}}>Train: Seat Reservation System</h1>
      <Coach/>
    </div>
  );
}

export default App;
