import { useState } from 'react'
import Greeting from './components/Greeting'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/App.css'
import test_image from './assets/test_image.jpg';

function App() {
  return ( 
    <>
      <Header />
      <main className="container my-5">
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-4 text-end">
            <img src={test_image} alt="Test image" 
            className="test_image border border-1 border-black"/>
          </div>
          <div className="col-12 col-md-4 text-left">
            <Greeting name="Visitor" />
          </div>
          <div className="col-12 col-md-4 text-start">
            <img src={test_image} alt="Test image" 
            className="test_image border border-1 border-black"/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App
