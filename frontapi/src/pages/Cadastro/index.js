import React from 'react';
import { Link } from 'react-router-dom';

function Cadastro() {
  return (    
    <div>
     <h1>aqui é a pagina do cadastro</h1>
     <Link to="/cadastro-juridico"> ir para o juridico</Link>
     <Link to="/cadastro-pessoa"> ir para o pessoa</Link>
    </div>
    
  );
}

export default Cadastro;
