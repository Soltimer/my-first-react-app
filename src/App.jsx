import { useState } from 'react'
import Greeting from './components/Greeting'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import test_image from './assets/test_image.jpg';
import './styles/App.css'

function App() {
  return ( 
    <>
      <Header />
      <main className="container my-5">
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-4 text-end">
            <Card src={test_image} alt="Test image"/>
          </div>
          <div className="col-12 col-md-4 text-left">
            <Greeting name="Visitor" />
          </div>
          <div className="col-12 col-md-4 text-start">
             <Card src={test_image} alt="Test image"/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App
