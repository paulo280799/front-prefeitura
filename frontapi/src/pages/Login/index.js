import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Login() {
  return (  
    <div className="login-form">
      <div className="box">
        <div className="heading">
          <h4>Login</h4>
        </div>
          <div className="form-fields">
            <div className="input-box">
              <input className="form-control"></input>
            </div>
            <div className="input-box">
              <input className="form-control" type="password"></input>
            </div>
            <div className="button-box">
              <button> <Link to="/Dashboard"> Entrar</Link></button>
            </div>
            <div className="button-box">
              <button><Link to="/Cadastro"> Criar cadastro</Link></button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Login;
