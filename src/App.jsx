import React from 'react';
import './App.css'
import SideBar from './Components/SideVarSection/SideBar';
import Body from './Components/BodySecation/Body';

 const App = () => {
  return (
    <div className="container">
      <SideBar />
      <Body />
    </div>
  );
};

export default App;
