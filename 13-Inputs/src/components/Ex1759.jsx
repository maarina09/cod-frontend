import React, { useState } from 'react'

function Ex1759() {
    const[numero, setNumero] = useState('')
    const[gorro, setGorro] = useState('')

    function calcularGorro(){
        let texto = ''
        for (let i = 0; i < numero; i++) {
            
            texto += 'Ho '
        }
        setGorro(texto)
    }

  return (
    <div className='ex1759'>
        <h2>Papai Noel</h2>
        <label htmlFor="">Número do gorro</label>
        <input type="text" 
        value={numero}
        onChange={(e) => setNumero(e.target.value)}

        />

        <button onClick={calcularGorro}>Calcular Ho Ho</button>
        {gorro}
   
    </div>
  )
}

export default Ex1759