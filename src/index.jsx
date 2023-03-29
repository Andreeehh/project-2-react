import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './templates/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Abc } from './templates/Abc';
import { Menu } from './components/Menu';
import { Page404 } from './templates/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu></Menu>
    <Switch>
      {/* /:slug? serão os parâmetros, caso tenha o ? quer dizer que ele é opcional e ira com undefined caso n seja passado na rota, se nao tiver, nao carrega a rota pois não é a rota exata passada */}
      <Route path="/abc/:slug?/:id?" exact component={Abc}></Route>
      <Route path="/" exact component={App}></Route>
      <Route path="*" component={Page404}></Route>
      {/* <App /> */}
    </Switch>
  </BrowserRouter>,
);
