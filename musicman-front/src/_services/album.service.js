import apiService from './apiService';

const controllerUrl = '/albums'

export const albumService = {
  Create,
  GetAll,
  GetById,
  Update,
  Delete
};

function Create(album){
  return apiService.post(controllerUrl, album)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function GetAll(){
  return apiService.get(controllerUrl)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      handleError(error)
    })
}

function GetById(albumId){
  return apiService.get(controllerUrl,  { params: {id: albumId} })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      handleError(error)
    })
}

function Update(albumId, album){
  return apiService.put(controllerUrl,  {
      params: {id: albumId},
      body: album
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      handleError(error)
    })
}

function Remove(albumId){
  return apiService.delete(controllerUrl,  { params: {id: albumId} })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      handleError(error)
    })
}

function handleError(error){
  console.error(error);
}
