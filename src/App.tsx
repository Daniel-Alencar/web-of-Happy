import React from 'react';

// .JSX - JAVASCRIPT XML
/*
  É uma maneira de colocar html dentro do javascript
*/
// .TSX - TYPESCRIPT XML
/*
  É uma maneira de colocar html dentro do typescript
*/

// interface somente no typescript
interface Nomepropriedades {
  text: string;
}

function Name(propriedades: Nomepropriedades) {
  return <h1>{propriedades.text}</h1>
}

function App() {
  return ( // className funciona da mesma forma que uma class (não pode ser class porque é uma palavra reservada do JS)
    <div className="App">
      <h1>Welcome to NLW,
        <Name text="Daniel"/>,
        <Name text="Maria"/>,
        <Name text="Vitor"/> e <Name text="Jéssica"/>
      </h1>
    </div>
  );
}

export default App;
