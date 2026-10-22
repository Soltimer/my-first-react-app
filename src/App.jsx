import { useState } from 'react'
import Greeting from './components/Greeting'
import Header from './components/Header'
import './styles/App.css'

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
