import logo from './logo.svg';
import './App.css';
// import Signin from './content/signin';
import React from 'react';
import Router from './content/routes';
import Signin from './content/signin';

function App() {
  return (
    <div>
   {/* <p>hello world</p> */}
   <Router/>
   {/* <Signin/> */}
    </div>
  );
}

export default App;
