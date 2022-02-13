
import { createStore, applyMiddleware, compose } from 'redux';
import projectsApiMiddleware from 'src/middlewares/projectsApi';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(projectsApiMiddleware),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
