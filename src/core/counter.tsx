import React, { useState } from 'react'

const Counter = ({ initial = 0 }) => {
    // since initial is a number (default value!), clicks is a number
    // setClicks is a function that accepts 
    // - a number 
    // - a function returning a number
    const [clicks, setClicks] = useState(initial);
    return (
      <>
        <p>Clicks: {clicks}</p>
        <button onClick={() => setClicks(clicks + 1)}>+</button>
        <button onClick={() => setClicks(clicks - 1)}>-</button>
      </>
    );
  };