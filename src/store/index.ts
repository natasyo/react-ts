import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import { charactersApi } from './CharacterAPI';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    search: searchReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});
setupListeners(store.dispatch);
export default store;

export type RootState = ReturnType<typeof store.getState>;
