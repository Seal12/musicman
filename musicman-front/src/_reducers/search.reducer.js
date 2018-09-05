import { searchConstants } from '../_constants';

export function search(state = {prober: searchConstants.PROBER_TRACK}, action) {
  switch (action.type) {
    case searchConstants.SEARCH_UPDATE_TYPE:
      return {
        ...state,
        prober: action.prober
      };

    default:
      return state;
  }
}
