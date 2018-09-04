import apiService from './apiService';

const controllerUrl = '/albums'

export const albumService = {
  create,
  getAll,
  getById,
  update,
  delete
};

create = (album) => {
  return apiService.post(controllerUrl, album)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

getAll = () => {
  return apiService.get(controllerUrl)
    .then((response) => {
      return response
    })
    .catch((error) => {
      handleError(error)
    })
}

getById = (albumId) => {
  return apiService.get(controllerUrl,  { params: {id: albumId} })
    .then((response) => {
      return response
    })
    .catch((error) => {
      handleError(error)
    })
}

update = (albumId, album) => {
  return apiService.put(controllerUrl,  {
      params: {id: albumId},
      body: album
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
      handleError(error)
    })
}

delete = (albumId) => {
  return apiService.delete(controllerUrl,  { params: {id: albumId} })
    .then((response) => {
      return response
    })
    .catch((error) => {
      handleError(error)
    })
}

function handleError(error){
  console.error(error);
}
