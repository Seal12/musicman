import { songConstants } from '../_constants';

export function songs(state = [], action) {
  switch (action.type) {
    //Create
    case songConstants.SONG_CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case songConstants.SONG_CREATE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: action.error,
        song: action.song
      }
    case songConstants.SONG_CREATE_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.error
      };

    //GetAll
    case songConstants.SONG_GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case songConstants.SONG_GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        songs: action.songs
      };
    case songConstants.SONG_GETALL_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };

    //GetById
    case songConstants.SONG_GETBYID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case songConstants.SONG_GETBYID_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: action.error,
        song: action.song
      };
    case songConstants.SONG_GETBYID_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };

    //Update
    case songConstants.SONG_UPDATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case songConstants.SONG_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: action.error,
        song: action.song
      };
    case songConstants.SONG_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };

    //Delete
    case songConstants.SONG_DELETE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case songConstants.SONG_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: action.error,
        status: action.status
      };
    case songConstants.SONG_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };

    default:
      return state;
  }
}
