import { albumConstants } from '../_constants';

export const albumActions = {
  create,
};


function create(album) {
  return dispatch => {
    dispatch(request(album));

    albumService.register(album).then(
      album => {
        dispatch(success());
        dispatch(alertActions.success("album created"));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(album) {
    return { type: albumConstants.ALBUM_CREATE_REQUEST, album };
  }
  function success(album) {
    return { type: albumConstants.ALBUM_CREATE_SUCCESS, album };
  }
  function failure(error) {
    return { type: albumConstants.ALBUM_CREATE_FAILURE, error };
  }
}
