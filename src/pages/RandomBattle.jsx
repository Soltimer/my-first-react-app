import MyButton from '../components/MyButton'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import mock_data from '../assets/mock_data.json';
import { useState } from 'react';

function RandomBattle() {
    const getCardsFromStorage = () => {
        const data = localStorage.getItem('ygopro_cards');
        return data ? JSON.parse(data) : mock_data.data;
};
  
const cards = getCardsFromStorage();

    const [showScore, setShowScore] = useState(false);

    const [card1] = useState(() => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        return cards[randomIndex];
    });
    const [card2] = useState(() => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        return cards[randomIndex];
    });
    const [card3] = useState(() => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        return cards[randomIndex];
    });
    const [card4] = useState(() => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        return cards[randomIndex];
    });
    const [card5] = useState(() => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        return cards[randomIndex];
    }); 
    
    const getAtk = (card) => isNaN(card.atk) ? 0 : Number(card.atk);

    let score1 = getAtk(card1);
    let score2 = getAtk(card2);
    let score3 = getAtk(card3);
    let score4 = getAtk(card4);
    let score5 = getAtk(card5);

    let totalScore = score1 + score2 + score3 + score4 + score5;

  return ( 
    <>
      <Header />
      <main className="container my-5">
        <div className="row justify-content-start g-4">
          <div className="col-12 col-md-4 text-end">
            <Card src={card1.card_images[0].image_url} alt={card1.name} />
          </div>
          <div className="col-12 col-md-4 text-center text-white">
            <p>Click the button to calculate the total power</p>
            <p>output of these 5 random cards</p>
            <MyButton color="darkred" shadowSize={10} 
            fontSize="36px" onClick={() => setShowScore(true)}>
            Battle
            </MyButton>
            <p></p>
            {showScore && (
            <p className="fs-3 fw-bold text-warning">
            {totalScore} ATK!
            </p>)}
            <p>Just refresh (F5) the page</p>
            <p>to get new random cards</p>
          </div>
          <div className="col-12 col-md-4 text-start">
            <Card src={card2.card_images[0].image_url} alt={card2.name} />
          </div>
            <div className="col-12 col-md-4 text-end">
            <Card src={card3.card_images[0].image_url} alt={card3.name} />
          </div>
          <div className="col-12 col-md-4 text-center">
            <Card src={card4.card_images[0].image_url} alt={card4.name} />
          </div>
        <div className="col-12 col-md-4 text-start">
            <Card src={card5.card_images[0].image_url} alt={card5.name} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default RandomBattle