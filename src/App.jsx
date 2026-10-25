import Greeting from './components/Greeting'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import './styles/App.css'

function App() {
  return ( 
    <>
      <Header />
      <main className="container my-5">
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-4 text-end">
            <Card src="https://picsum.photos/200/300.faulty" alt="Oikea kuva" />
          </div>
          <div className="col-12 col-md-4 text-left">
            <Greeting name="Visitor" />
          </div>
          <div className="col-12 col-md-4 text-start">
             <Card src="https://picsum.photos/200/300" alt="Oikea kuva" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App
