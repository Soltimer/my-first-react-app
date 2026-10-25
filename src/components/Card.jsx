import error_image from '../assets/error_image.jpg';

function Card(props) {
  const cardImageCheck = props.src ? props.src : error_image;

  return (
    <img 
      src={cardImageCheck} 
      alt={props.alt || "Card image"} 
      className="image_size border border-1 border-black" 
      onError={(e) => {
        e.target.src = error_image;
      }}
    />
  );
}

export default Card;