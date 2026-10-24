import { useState } from 'react'
import Greeting from './components/Greeting'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return ( 
    <>
      <Header/>
        <main className="container my-5 text-center">
          <Greeting name="Visitor"/>
        </main>
      <Footer/>
    </>
  );
}

export default App
