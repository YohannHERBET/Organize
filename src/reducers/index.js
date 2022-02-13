import { combineReducers } from 'redux';

import reducerReducer from './reducer';
import controlledFieldReducer from './controlled';
import modalsReducer from './modals';

const rootReducer = combineReducers({
  reducer: reducerReducer,
  controlled: controlledFieldReducer,
  modals: modalsReducer,
});

export default rootReducer;
