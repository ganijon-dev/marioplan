import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';


//import fbConfig from './config/fbConfig';

var firebaseConfig = {
    apiKey: "AIzaSyC8HSrr5RARU9rwHeGWxpzG8JneNSs0RMk",
    authDomain: "gtmarioplan.firebaseapp.com",
    databaseURL: "https://gtmarioplan.firebaseio.com",
    projectId: "gtmarioplan",
    storageBucket: "gtmarioplan.appspot.com",
    messagingSenderId: "862487959068",
    appId: "1:862487959068:web:1bccca7284df66c32931d9",
    measurementId: "G-XCXCEHF459"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  //const settings = {timestampsInSnapshots: true}
  firebase.firestore();

  const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase, {useFirestoreForProfile: true, userProfile : 'users'})
        
));

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
 const rrfProps = {
      firebase,
      config: rrfConfig,
      dispatch: store.dispatch,
      createFirestoreInstance // <- needed if using firestore
    }
function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div className= 'container center'><h3 className='text-center white-text'>Loading Screen...</h3></div>;
        return children
}




ReactDOM.render(<Provider store={store}> <ReactReduxFirebaseProvider {...rrfProps}> <AuthIsLoaded><App /> </AuthIsLoaded></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();