import React from 'react';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';
// Todas as importações serão feitas através do arquivo JS (não são importadas no HTML direto)





// .JSX - JAVASCRIPT XML
/*
  É uma maneira de colocar html dentro do javascript
*/

// .TSX - TYPESCRIPT XML
/*
  É uma maneira de colocar html dentro do typescript
*/




// interface somente no typescript (para identificar melhor os tipos dos parâmetros)
/*
interface Nomepropriedades {
  text: string;
}

function Name(propriedades: Nomepropriedades) {
  return <h1>{propriedades.text}</h1>
}
*/

function App() {
  return ( // className funciona da mesma forma que uma class (não pode ser class porque é uma palavra reservada do JS)
    <Routes/>
  );
}

export default App;
