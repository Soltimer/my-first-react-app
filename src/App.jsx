import Greeting from './components/Greeting'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import './styles/App.css'
import mock_data from './assets/mock_data.json';

function App() {
  const random_card_number1 = Math.floor(Math.random() * mock_data.data.length);
  const random_card_number2 = Math.floor(Math.random() * mock_data.data.length);
  const random_card1 = mock_data.data[random_card_number1];
  const random_card2 = mock_data.data[random_card_number2];
  
  return ( 
    <>
      <Header />
      <main className="container my-5">
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-4 text-end">
            <Card src={random_card1.card_images[0].image_url} alt={random_card1.name} />
          </div>
          <div className="col-12 col-md-4 text-left">
            <Greeting name="Visitor" />
          </div>
          <div className="col-12 col-md-4 text-start">
              <Card src={random_card2.card_images[0].image_url} alt={random_card2.name} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App
