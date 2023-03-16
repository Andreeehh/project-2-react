import P from 'prop-types';
import './App.css';
import { useState, useEffect, useCallback, useMemo } from 'react';

const Button = ({ incrementButton }) => {
  console.log('filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);
  console.log('pai renderizou');
  //salva a função na memória e nao re renderiza quando o counter mudar e re renderizar o app
  const incrementCounter = useCallback((num) => {
    //utiliza o setConter com prevCounter em vez do próprio counter e previne que a função mude, mantendo a mesma na memória
    setCounter((c) => c + num);
  }, []);

  const btn = useMemo(() => {
    //useMemo = React.memo
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>Contador1: {counter}</h1>
      {btn}
    </div>
  );
}

export default App;
