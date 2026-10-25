import Greeting from '../components/Greeting'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import mock_data from '../assets/mock_data.json';

function RandomBattle() {
  let cards = JSON.parse(localStorage.getItem('mock_data'));
  if (!cards) {
    console.log('Card data not found in localStorage, attempting to load it again.');
    localStorage.setItem('mock_data', JSON.stringify(mock_data));
    cards = mock_data;
} else {
  console.log('Card data loaded succesfully from localStorage!');
}
  
  const random_card_number1 = Math.floor(Math.random() * cards.data.length);
  const random_card_number2 = Math.floor(Math.random() * cards.data.length);
  const random_card1 = cards.data[random_card_number1];
  const random_card2 = cards.data[random_card_number2];
  
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

export default RandomBattle