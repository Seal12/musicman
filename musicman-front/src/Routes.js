import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Components
import Home from './containers/home';
import Albums from './containers/albums';
import Playlists from './containers/playlists';
import Song from './containers/song';
import Songs from './containers/songs';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/albums" component={Albums} />
              <Route exact path="/playlists" component={Playlists} />
              <Route exact path="/songs" component={Songs} />
              <Route exact path="/song" component={Song} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }
