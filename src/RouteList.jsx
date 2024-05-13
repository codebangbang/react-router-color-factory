import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import AddColorForm from './AddColorForm';


function RouteList() {
    return (
        <Switch>
            <Route exact path="/colors/new" component={<AddColorForm />} />
            <Route exact path="/colors/:color" component={<ColorDetail />} />
            <Route exact path="/colors" component={<ColorList />} />  
            <Redirect from="/colors/nope" to="/colors" />  
            <Redirect from="/*" to="/colors" />      
        </Switch>
    );
}

export default RouteList;