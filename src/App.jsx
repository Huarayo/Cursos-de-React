import { useState } from 'react';
import './App.css';
import CicloVida from './component/CicloVida.jsx';
import Propiedades from './component/propiedades.jsx';
import Estado from './component/Estado.jsx';
import RenderizadoCondicional from './component/RenderizadoCondicional';
import RenderizadoElementos from './component/RenderizadoElemento';
import {EventosES6,EventosES7, MasSobreEventos} from './component/Eventos.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section>

        {/* <CicloVida/>

        <hr></hr>

        <Propiedades 
        cadena="Esto es una cadena de texto!!" 
        numero={19} 
        booleano={true}
        arreglo={[1,2,3]}
        />

        <hr></hr>

        <Estado/>

        <hr></hr>

        <RenderizadoCondicional/>

        <hr></hr>

        <RenderizadoElementos/>

        <hr></hr> */}

        <EventosES6/>

        <hr></hr>

        <EventosES7/>

        <hr></hr>

        <MasSobreEventos/>
      </section>
      
    </div>
  )
}

export default App
