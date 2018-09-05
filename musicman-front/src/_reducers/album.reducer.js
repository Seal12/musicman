import { albumConstants } from '../_constants';

export function albums(state = [], action) {
  switch (action.type) {
    //Create
    case albumConstants.ALBUM_CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case albumConstants.ALBUM_CREATE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: action.error,
        album: action.album
      }
    case albumConstants.ALBUM_CREATE_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.error
      };

    //GetAll
    case albumConstants.ALBUM_GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case albumConstants.ALBUM_GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        albums: action.albums
      };
    case albumConstants.ALBUM_GETALL_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };

    //GetById
    case albumConstants.ALBUM_GETBYID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case albumConstants.ALBUM_GETBYID_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: action.error,
        album: action.album
      };
    case albumConstants.ALBUM_GETBYID_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };

    //Update
    case albumConstants.ALBUM_UPDATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case albumConstants.ALBUM_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: action.error,
        album: action.album
      };
    case albumConstants.ALBUM_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };

    //Delete
    case albumConstants.ALBUM_DELETE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case albumConstants.ALBUM_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: action.error,
        status: action.status
      };
    case albumConstants.ALBUM_DELETE_FAILURE:
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
