import { useState } from 'react'
import './App.css'
import Aprendiz from './componentes/Aprendiz'
import Frontend from './componentes/Frontend'
import Fullstack from './componentes/Fullstack'

function App() {
  const [pagina, setPagina] = useState(0)

  return (
    <>
    <div className='app'>
      <nav>
        <button onClick={() => setPagina(0)}>Aprendiz</button>
        <button onClick={() => setPagina(1)}>Frontend</button>
        <button onClick={() => setPagina(2)}>Fullstack</button>
      </nav>
      <h1>Painel de Orações</h1>
      {pagina==0 && <Aprendiz />}
      {pagina==1 && <Frontend />}
      {pagina==2 && <Fullstack />}
    </div>
    </>
  )
}

export default App
