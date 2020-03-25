import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

// history cria um historico de navegacao que permite voltar a ultima pagina da web

function App() {
  return (
    /* Provider => busca a store, ou seja, os estados de dentro do redux antes 
    de renderizar os componentes */
    <Provider store={store}>
      {/* PersistGate vai buscar as informações do redux persistor antes de 
      renderizar os elementos. Caso o usuário já esteja logado e esse estado s
      eja persistido, o persist busca esse valor. */}
      <PersistGate persistor={persistor}>
        <Router history={history}>
          {/* Router com o histórico de navegação */}
          <Routes /> {/* Rotas de endereço web */}
          <GlobalStyle /> {/* Estilos globais */}
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
