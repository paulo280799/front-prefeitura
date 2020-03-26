import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './componets/navbar';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Cadastro from './pages/Cadastro';
import Cadjuridico from './pages/Cad-juridico';
import CadPessoa from './pages/Cad-pessoa';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/Cadastro" component={Cadastro}/>
                <Route path="/cadastro-juridico" component={Cadjuridico}/>
                <Route path="/cadastro-pessoa" component={CadPessoa}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;