import { searchConstants } from '../_constants';

export const songActions = {
  changeProber,
};

function changeProber(newProber) {
  return dispatch => {
    dispatch(request(song));
  };

  function update(prober) {
    return { type: searchConstants.SEARCH_UPDATE_TYPE, prober };
  }
}
