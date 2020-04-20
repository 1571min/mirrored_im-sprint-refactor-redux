import { SET_USERNAME, SET_DARK_MODE } from '../actions/index';

const initialState = {
  currentUser: { name: 'Guest' },
  darkMode: false,
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      state = { ...state, currentUser: { name: action.name } };
      break;
    case SET_DARK_MODE:
      state = { ...state, darkMode: action.value };
      break;
    default:
      return state;
  }
  return state;
};

export default settingReducer;
