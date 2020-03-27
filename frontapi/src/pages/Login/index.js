import React, { Component, useState, useEffect }  from 'react';
import  { useDispatch } from 'react-redux';
import api from '../../service/api';
import './style.css';
import { Link } from 'react-router-dom';

export default function login(){

  const dispatch = useDispatch([]);
  const [login, setLogin] = useState([]);
  const [senha, setSenha] = useState([]);

  useEffect(()=>{

    async function loadApi(){
      const response = await api.post('login');
      setLogin(response.data);
      setSenha(response.data);
    }

    loadApi();
  }, []);

  function handleAdd(login , senha){
    dispatch({
      type: 'METHOD_LOGIN',
      login,
      senha
    });
  }

    return (
    <div className="login-form">
    <form className="box" >
      <div className="heading">
        <h4>Login</h4>
      </div>
        <div className="form-fields">
          <div className="input-box">           
            <input className="form-control" type="text" placeholder="digite seu login" />
          </div>
          <div className="input-box">
            <input className="form-control" type="password" placeholder="Digite sua senha" />
          </div>
          <div className="button-box">
            <button type="button" onClick={()=> handleAdd(login, senha)}/>
          </div>
          <div className="button-box">
            <button><Link to="/Cadastro"> Criar cadastro</Link></button>
          </div>
        </div>
    </form>
  </div>
    );
  }
