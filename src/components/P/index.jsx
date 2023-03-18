import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const P = () => {
  const theContext = useContext(GlobalContext);
  //Destructuring do objeto theContext = objeto passado no value do GlobalContext.Provider, com propriedade contextState, que é o objeto com title, body e counter, e outra propriedade setContextState que é a função do useState para atualizar o objeto, portanto é um destructuring de um objeto pra retornar a propriedade de um objeto dentro do primeiro objeto
  const {
    contextState: { body, counter },
    setState,
  } = theContext;
  return (
    <p
      onClick={() => {
        setState((s) => ({
          ...s,
          counter: s.counter + 1,
        }));
      }}
    >
      {body}
    </p>
  );
};
