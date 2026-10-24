import React from 'react';

function Greeting(props) {
    return (
    <div>
        <h1 className="text-white">Hello, {props.name}!</h1>
        <p className="text-white">Welcome to a very simple card game site</p>
        <p className="text-white">using Yu-Gi-Oh! API by YGOPRODeck</p>
    </div>
    );
}

export default Greeting;