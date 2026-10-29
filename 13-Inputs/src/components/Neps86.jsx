import React, { useState } from 'react'

function Neps86() {
    const[nota1, setNota1] = useState('')
    const[nota2, setNota2] = useState('')

  return (
    <div className='neps86'>
        <h2>Aprovado - Reprovado</h2>
        <label htmlFor="">Nota 1</label>
        <input type="text"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
        />
        <label htmlFor="">Nota 2</label>
        <input type="text"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
        />
    </div>
  )
}

export default Neps86