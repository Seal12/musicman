import apiService from './apiService';

const controllerUrl = '/songs'

export const songService = {
  Create,
  GetAll,
  GetById,
  Update,
  Remove
};

function Create(song){
  return apiService.post(controllerUrl, song)
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

function GetById(songId){
  return apiService.get(controllerUrl,  { params: {id: songId} })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      handleError(error)
    })
}

function Update(songId, song){
  return apiService.put(controllerUrl,  {
      params: {id: songId},
      body: song
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      handleError(error)
    })
}

function Remove(songId){
  return apiService.delete(controllerUrl,  { params: {id: songId} })
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
