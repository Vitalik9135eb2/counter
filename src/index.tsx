import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWithReducers from "./AppWithReducers";
import {Provider} from "react-redux";
import {store} from "./state/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
      <Provider store={store}>
          <AppWithReducers />
      </Provider>
  </React.StrictMode>
);

