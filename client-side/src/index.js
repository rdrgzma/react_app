import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
const campos = [ 'Codigo', 'Descrição', 'Preço']
ReactDOM.render(
  <App campos={campos} />,
  document.getElementById('root')
);
