import { useState } from 'react'
import './App.css'
import Oraçãododevcansado from './componentes/Oracao1'
import Oraçãodoaprendiz from './componentes/Oracao5'
import OraçãodoBackend from './componentes/Oracao4'
import OraçãodoFrontend from './componentes/Oracao2'
import OraçãododesenvolvedorWeb from './componentes/Oracao3'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app">
    <h1>Painel de orações</h1>
    <hr />
   <button onClick={() => setCount(1)}>Devcansado</button>
     <button onClick={() => setCount(2)}>Font-end</button>
      <button onClick={() => setCount(3)}>Dev Web</button>
       <button onClick={() => setCount(4)}>Backend</button>
        <button onClick={() => setCount(5)}>Aprendiz</button>
     
     {count == 1 && <Oraçãododevcansado/>}
     {count == 2 && <Oraçãodoaprendiz/>}
     {count == 3 && <OraçãodoBackend/>}
     {count == 4 && <OraçãodoFrontend/>}
     {count == 5 && <OraçãododesenvolvedorWeb/>}


   </div>
  )
}

export default App