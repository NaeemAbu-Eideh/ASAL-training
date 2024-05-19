import React from 'react';
import './index.css'
import Ecom from './Router/Index.jsx';
import { smartphone, audio, camera, cart, target } from './Variables/Variables.jsx';



function App() {
  return (
    <Ecom smartphone={smartphone} audio={audio} camera={camera} target={target} cart={cart}/>
  );
}

export default App;
