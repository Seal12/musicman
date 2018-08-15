import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Components
import Home from './containers/home';
import Album from './containers/album';
import Playlists from './containers/playlists';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/albums" component={Album} />
              <Route exact path="/playlists" component={Playlists} />
              {/*<Route exact path="/songs" component={<div><h1>Songs Page (Temp)</h1></div>} />*/}
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }
