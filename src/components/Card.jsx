function Card(props) {
  return (
    <img 
      src={props.src} 
      alt={props.alt} 
      className="test_image border border-1 border-black" 
    />
  );
}

export default Card;