import { legacy_createStore as createStore,applyMiddleware } from 'redux';
import { reducer, innitialState } from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


export const configureStore = () => {
  const store = createStore(reducer, innitialState, composeWithDevTools(applyMiddleware(thunk)));
  return store;
};
