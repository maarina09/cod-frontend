import React, { useState } from 'react'
import './Dados.css'

function Dados(){
const[rolagem, setRolagem] = useState();
const[total, setTotal] = useState(0);

//  setTotal(rolarD6() + rolarD10() + rolarD12() + rolarD20()); 

function rolarD6(){
     let n = Math.ceil(Math.random()*6)
    setRolagem(n)
    setTotal(total + n )
}

function rolarD10(){
    let n = Math.ceil(Math.random()*10)
    setRolagem(n)
    setTotal(total + n )
}

function rolarD12(){
    let n = Math.ceil(Math.random()*12)
    setRolagem(n)
    setTotal(total + n )
}

function rolarD20(){
    let n = Math.ceil(Math.random()*20)
    setRolagem(n)
    setTotal(total + n )
}


return (
    <div className='dados'>
        <h2>Rolagens de dados D6-D20</h2>

        <div className='botoes-dados'>
        <button onClick={rolarD6}>Rolar D6</button>
        <button onClick={rolarD10}>Rolar D10</button>
        <button onClick={rolarD12}>Rolar D12</button>
        <button onClick={rolarD20}>Rolar D20</button>
    </div>
    <p>
        Resultado: {rolagem}
    </p>

       
    <p>
        Total: {total}
    </p>

</div>
  )
}

export default Dados