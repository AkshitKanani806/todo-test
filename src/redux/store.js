import { createStore, applyMiddleware } from "redux";
import  reducer from "./reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, 
    stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, reducer) // create a persisted reducer

const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    applyMiddleware(thunk) // add any middlewares here
)

const  persistor = persistStore(store); 

export {store, persistor}