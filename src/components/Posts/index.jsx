import { useContext, useEffect, useRef } from 'react';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/CounterProvider/action';

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    console.log(isMounted.current);
    loadPosts(postsDispatch).then((dispatch) => {
      console.log(isMounted.current);
      if (isMounted.current) {
        console.log(isMounted.current);
        dispatch();
      }
    });

    return () => {
      //Limpando o isMounted para não executar a função dispatch em um unmounted component
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        Counter {counterState.counter}+
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        Counter {counterState.counter}-
      </button>
      <h1>Posts</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
