import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware} from 'redux'
import './index.css';
import App from './components/App'
import rootreducer from './reducers'
import thunk from 'redux-thunk'
/*const logger =function({dispatch,getState})
{
  return function(next)
  {
    return function(action)
    {
      console.log('ACTION_TYPE=', action.type);
      next(action);
    }
  }
}*/

const logger =({dispatch,getState})=> (next) => (action)=>{
  if(typeof action !=='function')
  console.log('ACTION_TYPE=', action.type);
  
  next(action);
}
/*
npm i redux-thunk
const thunk =({dispatch,getState})=> (next) => (action)=>{
  //console.log('ACTION_TYPE=', action.type);
  if(typeof action === 'function')
  {
    action(dispatch)
    return;
  }
  next(action);
}

*/
const store= createStore(rootreducer,applyMiddleware(logger , thunk));
console.log('store', store);
console.log('BEFORE STATE', store.getState());
/*
store.dispatch({
  type:'ADD_MOVIES',
  movies: [{name:'Superman'}]
});*/
console.log('AFTER STATE', store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log('AFTER STATE', store.getState());
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

