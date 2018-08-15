import { albumConstants } from '../_constants';

export function albums(state = [], action) {
  switch (action.type) {
    case albumConstants.ALBUM_CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case albumConstants.ALBUM_CREATE_SUCCESS:
      return {
        ...state,
        createSuccess: true,
        loading: false,
        error: action.error,
        album: action.album
      }
    case albumConstants.ALBUM_CREATE_FAILURE:
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
