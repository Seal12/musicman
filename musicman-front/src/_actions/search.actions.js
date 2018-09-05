import { searchConstants } from '../_constants';

export const searchActions = {
  changeProber,
};

function changeProber(newProber) {
  return dispatch => {
    dispatch(update(newProber));
  };

  function update(prober) {
    return { type: searchConstants.SEARCH_UPDATE_TYPE, prober };
  }
}
