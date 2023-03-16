import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //componentDidMount - executa 1x, passando array vazia de segundo parametro
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);
    //compontWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  //Com dependência - executa toda vez q a dependência mudar
  useEffect(() => {
    console.log('contador mudou para', counter);
    // setCounter(counter + 1); causa loop infinito
  }, [counter]);

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>
        Contador1: {counter} Contador2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}

export default App;
