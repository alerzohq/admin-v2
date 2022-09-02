import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./global.styled";
import App from "./app/App";
import Provider from "./context";
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
     <Provider>
      <GlobalStyle />
      <App />
      <Toaster/>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
    </QueryClientProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);


