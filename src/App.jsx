import Greeting from './components/Greeting'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import './styles/App.css'
import mock_data from './assets/mock_data.json';

function App() {
  const card26 = mock_data.data[26];
  const card27 = mock_data.data[27];
  console.log(mock_data)
  
  return ( 
    <>
      <Header />
      <main className="container my-5">
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-4 text-end">
            <Card src={card26.card_images[0].image_url} alt={card26.name} />
          </div>
          <div className="col-12 col-md-4 text-left">
            <Greeting name="Visitor" />
          </div>
          <div className="col-12 col-md-4 text-start">
              <Card src={card27.card_images[0].image_url} alt={card27.name} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App
