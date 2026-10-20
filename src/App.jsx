import { useState } from 'react'
import Greeting from './Greeting'
import './App.css'

function App() {
  return ( 
    <>
    <h1>Hello, creature!</h1>
    <Greeting name="Toast" />
    </>
  );
}

export default App
