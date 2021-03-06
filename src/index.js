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
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase';
import { Loader } from './components/loader/Loader';


//import fbConfig from './config/fbConfig';

const firebaseConfig = {
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

const storage = firebase.storage();

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore, storage })),
        reduxFirestore(firebase, { useFirestoreForProfile: true, userProfile: 'users' })

    ));

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance 
}

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <Loader /> ;

    return children;
}




ReactDOM.render( 
    < Provider store = { store } > 
        <ReactReduxFirebaseProvider {...rrfProps } > 
            < AuthIsLoaded >
                < App /> 
            </ AuthIsLoaded>
        </ReactReduxFirebaseProvider >
    </Provider>, document.getElementById('root'));
    
serviceWorker.unregister();