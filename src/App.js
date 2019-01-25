import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Config from '../config';

class App extends Component {

  componentWillMount(){
      const config = {
    apiKey: Config.MY_KEY,
    authDomain: "manager-4fabc.firebaseapp.com",
    databaseURL: "https://manager-4fabc.firebaseio.com",
    projectId: "manager-4fabc",
    storageBucket: "manager-4fabc.appspot.com",
    messagingSenderId: "341741347159"
    };
  firebase.initializeApp(config);
  }

  render() {
   const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={ store }>
        <LoginForm/>
      </Provider>
    );
  }
}


export default App;
