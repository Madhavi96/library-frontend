import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/main.scss';

const LoginPage = lazy(() => import('./components/LoginPage'));
const MainPage = lazy(() => import('./components/MainPage'));

const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/books" element={<MainPage />} />
        </Routes>
      </Suspense>
    </Router>
  </Provider>
);

export default App;