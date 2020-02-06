import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PageForm from './pages/PageForm';
import PageList from './pages/PageList';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/cadastro" component={PageForm} />
            <Route path="/lista_candidatos" component={PageList} />
            <Route path="*" render={ () => ( <Redirect to='/lista_candidatos' />)} />
        </Switch>
    </BrowserRouter>
);

export default Routes;