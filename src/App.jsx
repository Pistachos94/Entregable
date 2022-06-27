
import './App.css'
import Texto from './Modulos/Texto';
import Bulb from './Modulos/Bombilla.jsx'
import {useState} from 'react';
import Cards from './Modulos/Cards';
import Cardsquotes from './Modulos/Cardsquotes';

function App() {
  const [isOn, setIsOn] = useState(true);

  const toggleIsOn = () => setIsOn(!isOn);

  return ( 
    <div className="App">
{/*       <div>
      <Texto/>
      </div>
      <Bulb isOn={isOn} />
      <div>
      <Bulb isOn={isOn} />
      <button onClick={toggleIsOn}>On / off</button> 
      </div>
      <div className="Cardss">
      <Cards/>
      </div>  */}
    <Cardsquotes/>

    </div>
  )
}

export default App
