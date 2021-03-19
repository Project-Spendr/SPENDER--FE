import { SET_GOALS } from '../actions/reducerActions';

export const initialState = {
  goals: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case SET_GOALS: {
      return { ...state, goals: action.payload };
    }
    default: return state;
  }
}