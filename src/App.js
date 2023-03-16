import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  //React.memo para nao re renderizar um component que nao mudou
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  //salva a função na memória e nao re renderiza quando o counter mudar e re renderizar o app
  const incrementCounter = useCallback((num) => {
    //utiliza o setConter com prevCounter em vez do próprio counter e previne que a função mude, mantendo a mesma na memória
    setCounter((c) => c + num);
  }, []);

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>Contador1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
