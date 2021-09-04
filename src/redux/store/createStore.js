import { createStore, applyMiddleware ,combineReducers,compose} from "redux";
import thunk from "redux-thunk";
//import authReducer from "../reducers/authReducer";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
//import createSocketIoMiddleware from "redux-socket.io";
import eatsReducer from "../reducers/eatsReducer";
//import io from "socket.io-client/dist/socket.io";
//const parser = require('socket.io-json-parser');
//let socket = io(Endpoint.BASE_SOCKETIO_URI, {jsonp:false});
/*
let socket = io(Endpoint.BASE_SOCKETIO_URI,{
  timeout: 10000,
  jsonp: false,
  transports: ['websocket'],
  autoConnect: false,
  agent: '-',
  path: '/', // Whatever your path is
  pfx: '-',
  key: "token", // Using token-based auth.
  passphrase: "cookie", // Using cookie auth.
  cert: '-',
  ca: '-',
  ciphers: '-',
  rejectUnauthorized: '-',
  perMessageDeflate: '-',
 
})


let socketIoMiddleware = createSocketIoMiddleware(socket, "/");
*/
const log =  createLogger({ diff: true, collapsed: true });

 const middleware = [thunk, log];

 //const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
/*
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(combineReducers({
    deviceInformationReducer,uiReducer,authReducer, registerReducer,locationReducer
}), composeEnhancers(applyMiddleware(...middleware)));
*/
/*
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(combineReducers({
    deviceInformationReducer,uiReducer,authReducer, registerReducer,locationReducer
}), enhancer);
*/
const store = createStore(combineReducers({
   // authReducer,
    eatsReducer,
}), composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ));

export default store;