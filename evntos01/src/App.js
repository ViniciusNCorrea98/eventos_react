import './App.css';
import { useState } from 'react'

function App() {

  const [number, setNumber] = useState(0);

  function handleChangeValue(value) {
    const newSum = number + value;

    if(newSum <= 0){
      return;
    }

    setNumber(newSum)
  }

  return (
    <div className="App">
      <div className='container-btns'>
        <button id='increment' onClick={() => handleChangeValue(1)}>Incrementar</button>
        <h1>{number}</h1>
        <button id='decrement' onClick={() => handleChangeValue(-1)}>Decrementar</button>
      </div>
      <div>
        <h2>{number}</h2>
      </div>
    </div>
  );
}

export default App;
