import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={client}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

