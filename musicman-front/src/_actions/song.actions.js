import { songConstants } from '../_constants';
import { songService } from '../_services';


export const songActions = {
  create,
  getAll,
  getById,
  update,
  remove
};


function create(song) {
  return dispatch => {
    dispatch(request(song));

    songService.Create(song).then(
      song => {
        dispatch(success(song));
      },
      error => {
        dispatch(failure(error));
        console.error("Something went wrong!");
      }
    );
  };

  function request(song) {
    return { type: songConstants.SONG_CREATE_REQUEST, song };
  }
  function success(song) {
    return { type: songConstants.SONG_CREATE_SUCCESS, song };
  }
  function failure(error) {
    return { type: songConstants.SONG_CREATE_FAILURE, error };
  }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    songService.GetAll().then(
      songs => {
        dispatch(success(songs));
      },
      error => {
        dispatch(failure(error));
        console.error("Something went wrong!");
      }
    );
  };

  function request() {
    return { type: songConstants.SONG_GETALL_REQUEST };
  }
  function success(songs) {
    return { type: songConstants.SONG_GETALL_SUCCESS, songs };
  }
  function failure(error) {
    return { type: songConstants.SONG_GETALL_FAILURE, error };
  }
}

function getById(id) {
  return dispatch => {
    dispatch(request());

    songService.GetById(id).then(
      song => {
        dispatch(success(song));
      },
      error => {
        dispatch(failure(error));
        console.error("Something went wrong!");
      }
    );
  };

  function request() {
    return { type: songConstants.SONG_GETBYID_REQUEST };
  }
  function success(song) {
    return { type: songConstants.SONG_GETBYID_SUCCESS, song };
  }
  function failure(error) {
    return { type: songConstants.SONG_GETBYID_FAILURE, error };
  }
}

function update(id, song) {
  return dispatch => {
    dispatch(request());

    songService.Update(id, song).then(
      updatedSong => {
        dispatch(success(updatedSong));
      },
      error => {
        dispatch(failure(error));
        console.error("Something went wrong!");
      }
    );
  };

  function request() {
    return { type: songConstants.SONG_UPDATE_REQUEST };
  }
  function success(song) {
    return { type: songConstants.SONG_UPDATE_SUCCESS, song };
  }
  function failure(error) {
    return { type: songConstants.SONG_UPDATE_FAILURE, error };
  }
}

function remove(id) {
  return dispatch => {
    dispatch(request());

    songService.Remove(id).then(
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
    return { type: songConstants.SONG_DELETE_REQUEST };
  }
  function success(status) {
    return { type: songConstants.SONG_DELETE_SUCCESS, status };
  }
  function failure(error) {
    return { type: songConstants.SONG_DELETE_FAILURE, error };
  }
}
