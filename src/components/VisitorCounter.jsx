import { useState } from 'react';

function VisitorCounter() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    if (clicks === 0) {
      setClicks(1);
    }
  };

  return (
    <button 
      onClick={handleClick} 
      disabled={clicks > 0}
      className="btn btn-outline-light btn-sm"
    >
      {clicks === 0 
        ? "Click here to be a visitor!" 
        : `You are visitor number ${clicks}!`}
    </button>
  );
}

export default VisitorCounter;