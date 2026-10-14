import './App.css'
import Jogo from './componentes/Jogo'
import Ganso from './componentes/Ganso'
import Capitao from './componentes/Capitao'
import Fumaca from './componentes/Fumaca'
import Deslocamento from './componentes/Deslocamento'

function App() {
  return (
   <div className='app'>
    <h1>03 estados e componentes</h1>
    <h2>#0030</h2>

    <hr />

    <Ganso />
    <h2>#0027.sq05</h2>
    <Jogo />
    <Capitao />
    <Fumaca />
    <Deslocamento />
   </div>
  )
}

export default App
