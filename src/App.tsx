import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/Logo.svg';
// Todas as importações serão feitas através do arquivo JS (não são importadas no HTML direto)





// .JSX - JAVASCRIPT XML
/*
  É uma maneira de colocar html dentro do javascript
*/

// .TSX - TYPESCRIPT XML
/*
  É uma maneira de colocar html dentro do typescript
*/




// interface somente no typescript
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
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Rio do Sul</strong>
          <span>Santa catarina</span>
        </div>

        <a href="" className="enter-app">
          J
        </a>
      </div>
    </div>
  );
}

export default App;
