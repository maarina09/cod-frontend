import React, { useState } from 'react'

function Jogo() {
const[resultado, setResultado] = useState();

 function classificarPts(){
    let pontos = Number(prompt("Digite a quantidade de pts: "));
    if(pontos <= 10){
       setResultado("Deu ruim"); 

    } else if( pontos <= 100){
      setResultado("Tá... Vai dar certo! Errado já está dando");
      
    } else if ( pontos <= 200){
      setResultado("Supimpa!");
     
    }else{
      setResultado("MITOU!");
     
    }
  }
  return (
    <div className='jogo'>
        <h2>Jogo do Mano Juca.</h2>
        <button onClick={classificarPts}>Classificar</button>
        {resultado}
    </div>
  )
}

export default Jogo