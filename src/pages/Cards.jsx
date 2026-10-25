import Greeting from '../components/Greeting'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import mock_data from '../assets/mock_data.json';

function Cards() {
  let cards = JSON.parse(localStorage.getItem('mock_data'));
  if (!cards) {
    console.log('Card data not found in localStorage, attempting to load it again.');
    localStorage.setItem('mock_data', JSON.stringify(mock_data));
    cards = mock_data;
} else {
  console.log('Card data loaded succesfully from localStorage!');
}
  
const shuffledCards = [...mock_data.data].sort(() => 0.5 - Math.random());
const randomNineCards = shuffledCards.slice(0, 9);
const columnAlignments = [
    'justify-content-end',
    'justify-content-center',
    'justify-content-start'
  ];

  return ( 
    <>
      <Header />
        <main className="container my-5">
            <div className="row g-4">
                {randomNineCards.map((card, index) => (
                <div 
                    key={card.id} 
                    className={`col-12 col-md-4 d-flex ${columnAlignments[index % 3]}`}
                >
                    <Card 
                    src={card.card_images[0].image_url} 
                    alt={card.name} 
                    />
                </div>
                ))}
            </div>
        </main>
      <Footer />
    </>
  );
}

export default Cards