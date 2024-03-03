import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@emotion/react';
// import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import { theme } from './theme/theme';
// import { store } from "./redux/store";

import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}> */}
      <BrowserRouter basename="/gajowy-trans">
        <App />
      </BrowserRouter>
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);
