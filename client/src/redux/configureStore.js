import { configureStore} from "@reduxjs/toolkit";
import  darkModeReducer from "./slices/darkMode";
import timerStateReducer from "./slices/timerState"
import { combineReducers } from "@reduxjs/toolkit";
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
    timerState: timerStateReducer
})

// Persist for not to lose redux state on refesh

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