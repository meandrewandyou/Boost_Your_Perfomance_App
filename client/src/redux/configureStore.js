import { configureStore, combineReducers} from "@reduxjs/toolkit";
import  darkModeReducer from "./slices/darkMode";
import timerStateReducer from "./slices/timerState"
import userReducer from "./slices/userSlice"

import {persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key : "root",
    storage
}
const reducers = combineReducers({
    darkMode: darkModeReducer,
    timerState: timerStateReducer,
    loggedUserState: userReducer
})

// Persist stands for not to lose redux state on refesh

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  
})

const persistor = persistStore(store)


export  {store, persistor};