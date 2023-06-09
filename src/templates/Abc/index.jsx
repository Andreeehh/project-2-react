import { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export const Abc = () => {
  const { slug, id } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setTimeout(function () {
      history.push('/');
    }, 5000);
  }, [history]);

  return (
    <h1>
      <div>
        ABC {slug} {id}
      </div>
    </h1>
  );
};
