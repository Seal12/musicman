import { albumConstants } from '../_constants';
import { albumService } from '../_services';


export const albumActions = {
  create,
  getAll,
  getById,
  update,
  remove
};


function create(album) {
  return dispatch => {
    dispatch(request(album));

    albumService.Create(album).then(
      album => {
        dispatch(success(album));
      },
      error => {
        dispatch(failure(error));
        console.error("Something went wrong!");
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

function getAll() {
  return dispatch => {
    dispatch(request());

    albumService.GetAll().then(
      albums => {
        dispatch(success(albums));
      },
      error => {
        dispatch(failure(error));
        console.error("Something went wrong!");
      }
    );
  };

  function request() {
    return { type: albumConstants.ALBUM_GETALL_REQUEST };
  }
  function success(albums) {
    return { type: albumConstants.ALBUM_GETALL_SUCCESS, albums };
  }
  function failure(error) {
    return { type: albumConstants.ALBUM_GETALL_FAILURE, error };
  }
}

function getById(id) {
  return dispatch => {
    dispatch(request());

    albumService.GetById(id).then(
      album => {
        dispatch(success(album));
      },
      error => {
        dispatch(failure(error));
        console.error("Something went wrong!");
      }
    );
  };

  function request() {
    return { type: albumConstants.ALBUM_GETBYID_REQUEST };
  }
  function success(album) {
    return { type: albumConstants.ALBUM_GETBYID_SUCCESS, album };
  }
  function failure(error) {
    return { type: albumConstants.ALBUM_GETBYID_FAILURE, error };
  }
}

function update(id, album) {
  return dispatch => {
    dispatch(request());

    albumService.Update(id, album).then(
      updatedAlbum => {
        dispatch(success(updatedAlbum));
      },
      error => {
        dispatch(failure(error));
        console.error("Something went wrong!");
      }
    );
  };

  function request() {
    return { type: albumConstants.ALBUM_UPDATE_REQUEST };
  }
  function success(album) {
    return { type: albumConstants.ALBUM_UPDATE_SUCCESS, album };
  }
  function failure(error) {
    return { type: albumConstants.ALBUM_UPDATE_FAILURE, error };
  }
}

function remove(id) {
  return dispatch => {
    dispatch(request());

    albumService.Remove(id).then(
      status => {
        dispatch(success(status));
      },
      error => {
        dispatch(failure(error));
        console.error("Something went wrong!");
      }
    );
  };

  function request() {
    return { type: albumConstants.ALBUM_DELETE_REQUEST };
  }
  function success(status) {
    return { type: albumConstants.ALBUM_DELETE_SUCCESS, status };
  }
  function failure(error) {
    return { type: albumConstants.ALBUM_DELETE_FAILURE, error };
  }
}
