
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text, View} from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import config from '../config.js';

class App extends Component {
  componentWillMount(){
      const config = {
    apiKey: "config.key",
    authDomain: "manager-4fabc.firebaseapp.com",
    databaseURL: "https://manager-4fabc.firebaseio.com",
    projectId: "manager-4fabc",
    storageBucket: "manager-4fabc.appspot.com",
    messagingSenderId: "341741347159"
    };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <LoginForm />
      </Provider>
    );
  }
}

const styles = {

};

export default App;
