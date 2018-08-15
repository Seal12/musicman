import { songConstants } from '../_constants';

export function songs(state = [], action) {
  switch (action.type) {
    case songConstants.SONG_CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case songConstants.SONG_CREATE_SUCCESS:
      return {
        ...state,
        createSuccess: true,
        loading: false,
        error: action.error,
        song: action.song
      }
    case songConstants.SONG_CREATE_FAILURE:
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
