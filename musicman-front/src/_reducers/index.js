import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { playlists } from './playlist.reducer';
import { albums } from './album.reducer';
import { songs } from './song.reducer';

export default combineReducers({
    routing: routerReducer,
    albums,
    playlists,
    songs
});
