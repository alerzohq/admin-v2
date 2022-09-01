import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./global.styled";
import App from "./app/App";
import Provider from "./context";
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider>
      <GlobalStyle />
      <App />
      <Toaster/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


