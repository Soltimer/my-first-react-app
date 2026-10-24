import React from 'react';

function Greeting(props) {
    return (
    <div>
        <h1 className="text-white">Hello, {props.name}!</h1>
        <p className="text-white">Welcome to a very simple card game site</p>
        <p className="text-white">Using Yu-Gi-Oh! API by YGOPRODeck</p>
        <p className="text-white">You can view some of the cards on Cards page</p>
        <p className="text-white">And on Random Battle you can see results of</p>
        <p className="text-white">Randomized cards (5 cards each battle)</p>
    </div>
    );
}

export default Greeting;