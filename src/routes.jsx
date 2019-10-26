import React from 'react'
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/teste"
                component={() => (
                    <div>TESTE</div>
                )}
            />
        </Switch>
    )
}

export default Routes;