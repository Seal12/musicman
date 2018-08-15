import { playlistConstants } from '../_constants';

export function playlists(state = [], action) {
  switch (action.type) {
    //Create Playlist
    case playlistConstants.PLAYLIST_CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case playlistConstants.PLAYLIST_CREATE_SUCCESS:
      return {
        ...state,
        createSuccess: true,
        loading: false,
        error: action.error,
        playlist: action.playlist
      }
    case playlistConstants.PLAYLIST_CREATE_FAILURE:
      return {
        ...state,
        createSuccess: false,
        loading: false,
        error: action.error
      }
      //GET Playlists
      case playlistConstants.PLAYLIST_GETALL_REQUEST:
        return {
          ...state,
          loading: true
        };
      case playlistConstants.PLAYLIST_GETALL_SUCCESS:
        return {
          ...state,
          createSuccess: true,
          loading: false,
          error: action.error,
          playlists: action.playlists
        }
      case playlistConstants.PLAYLIST_GETALL_FAILURE:
        return {
          ...state,
          createSuccess: false,
          loading: false,
          error: action.error
        }

    default:
      return state;
  }
}
