import error_image from '../assets/error_image.jpg';

function Card(props) {
  const cardImageCheck = props.src ? props.src : error_image;

  return (
    <img 
      src={cardImageCheck} 
      alt={props.alt || "Yu-Gi-Oh! card image"} 
      className="image_size border border-3 border-black rounded" 
      onError={(e) => {
        e.target.src = error_image;
      }}
    />
  );
}

export default Card;