import React from 'react';

function Cadjuridico() {
  return (    
    <div className="login-form">
    <div className="box">
      <div className="heading">
        <h4>Criar Conta</h4>
      </div>
        <div className="form-fields">
          <div className="input-box">
            <input className="form-control" placeholder="Digite seu Login"></input>
          </div>
          <div className="input-box">
            <input className="form-control" type="password" placeholder="Digite sua Senha"></input>
          </div>
          <div className="input-box">
            <input className="form-control" placeholder="Digite seu CNPJ"></input>
          </div>
          <div className="input-box">
            <input className="form-control" placeholder="Digite seu Telefone"></input>
          </div>
          <div className="input-box">
            <input className="form-control" placeholder="Digite seu ENdereço"></input>
          </div>
          <div className="button-box">
            <button> Salvar</button>
          </div>
        </div>
    </div>
  </div>
    
  );
}

export default Cadjuridico;
