import { useState } from 'react'
import Greeting from './Greeting'
import Header from './Header'
import './App.css'

function App() {
  return ( 
    <>
    <Header/>
    <h1>Hello, creature!</h1>
    <Greeting name="Toast" />
    </>
  );
}

export default App
