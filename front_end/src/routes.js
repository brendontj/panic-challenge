import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PageForm from './pages/PageForm';
import PageList from './pages/PageList';
import PageEdit from './pages/PageEdit';
import PageInfo from './pages/PageInfo';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/cadastro" component={PageForm} />
            <Route path="/lista_candidatos" component={PageList} />
            <Route path="/editar_candidato/:cpf" component={PageEdit} />
            <Route path="/info_candidato/:cpf" component={PageInfo} />
            <Route path="*" render={ () => ( <Redirect to='/lista_candidatos' />)} />
        </Switch>
    </BrowserRouter>
);

export default Routes;