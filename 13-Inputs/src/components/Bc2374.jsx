import React, { useState } from 'react'

function Bc2374() {
    const [pneu, setPneu] = useState('')
    const [digitada, setDigitada] = useState('')
    const [diferenca, setDiferenca] = useState('Digita aí')

  function calcularpressao(){
      let pressao = Number(digitada) - Number(pneu)
        setDiferenca(pressao)
  }

  return (
    <div className='bc2374'>
        <h2>Bc2374 - Pneu</h2>
        <label htmlFor="">Pressão Pneu</label>
        <input type="text" 
          value={pneu}
          onChange={(e) => setPneu(e.target.value)}
        />

        <label htmlFor="">Pressão Desejada</label>
        <input type="text" 
          value={digitada}
          onChange={(e) => setDigitada(e.target.value)}
        />
        <button onClick={calcularpressao}>Ver diferença</button>
        {diferenca}
    </div>
  )
}

export default Bc2374