import React, { useState } from 'react';
import './botao.css';

function Botao({propButton}) {
  // const [color, setColor] = useState('white');

  // const handleClick = () => {
  //   setColor(prevColor => (prevColor === 'white' ? 'black' : 'white'));
  // };

  return (
    <div>
      <button 
        className={`button-header`} 
        // onClick={handleClick}
      >
        {propButton}
      </button>
    </div>
  );
}

export default Botao;


