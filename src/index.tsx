import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Importamos o react + a integração com a DOM do nosso html
 */
import App from './App';

ReactDOM.render(
  <App/>, //Aqui entra o que será redirecionado para o html final da página
  document.getElementById('root') // Onde será colocado o html que nós queremos
); 