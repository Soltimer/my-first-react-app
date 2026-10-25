import { useState, useEffect } from 'react';
import Greeting from '../components/Greeting';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import '../styles/App.css';
import mock_data from '../assets/mock_data.json';

function Home() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const loadAPICards = async () => {
    const storedData = localStorage.getItem('ygopro_cards');

      if (storedData) {
        console.log('Card images found from localStorage!');
        setCards(JSON.parse(storedData));
        setLoading(false);
      } else {
        console.log('Card images not found from localStorage, fetching using API');
        try {
          const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=50');
          const result = await response.json();
          localStorage.setItem('ygopro_cards', JSON.stringify(result.data));
          setCards(result.data);
        } catch (error) {
          console.error('API fetch failed, using backup mock_data:', error);
          localStorage.setItem('ygopro_cards', JSON.stringify(mock_data.data));
          setCards(mock_data.data);
        } finally {
          setLoading(false);
        }
      }
    };

    loadAPICards();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-white my-5">
        <h2>Just wait a moment, downloading card images...</h2>
      </div>
    );
  }

  const random_card_number1 = Math.floor(Math.random() * cards.length);
  const random_card_number2 = Math.floor(Math.random() * cards.length);
  const random_card1 = cards[random_card_number1];
  const random_card2 = cards[random_card_number2];
  
  return ( 
    <>
      <Header/>
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
      <Footer/>
    </>
  );
}

export default Home;