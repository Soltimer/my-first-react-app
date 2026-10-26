import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import mock_data from '../assets/mock_data.json';

function Cards() {
    const getCardsFromStorage = () => {
        const data = localStorage.getItem('ygopro_cards');
        return data ? JSON.parse(data) : mock_data.data;
};
  
const cards = getCardsFromStorage();

const shuffledCards = [...cards].sort(() => 0.5 - Math.random());
const randomNineCards = shuffledCards.slice(0, 9);
const columnAlignments = [
    'justify-content-end',
    'justify-content-center',
    'justify-content-start'
  ];

  return ( 
    <>
      <Header/>
        <main className="container my-5">
            <div className="row g-4">
                {randomNineCards.map((card, index) => (
                  <div key={card.id} 
                  className={`col-12 col-md-4 d-flex ${columnAlignments[index % 3]}`}>
                  <Card src={card.card_images[0].image_url} 
                  alt={card.name}/>
                  </div>
                ))}
            </div>
        </main>
      <Footer/>
    </>
  );
}

export default Cards;