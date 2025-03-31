import React, { useState } from 'react';

const Control = () => {
  const [inputText, setInputText] = useState(''); 
  const [displayText, setDisplayText] = useState(''); 

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', color:'white'}}>
        <p>Ingresa tu nombre: </p>
      <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
      />
      <div>
        <br ></br>
        <button onClick={() => setDisplayText("¡Bienvenid@ " + inputText + "!")}>Mostrar</button>
      </div>
      <div>
            <p style={{ fontSize: '18px', fontWeight: 'bold', minHeight: '24px'}}> {displayText}</p> 
        </div>
      
    </div>
  );
};

export default Control;
