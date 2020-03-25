import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      /* key -> Se tiver varias aplicacoes em um unico host, colocar o nome da aplicacao */
      key: 'gympoint',
      storage,
      /* Nome dos reducers que utilizarao o persist para armazenar as informacoes */
      whitelist: ['auth', 'user', 'student'],
    },
    reducers
  );

  return persistedReducer;
};
