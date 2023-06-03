import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserContextProvider } from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={client}>
          <App />
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
);



// ReactDOM.render(
//   <React.StrictMode>
//     <UserContextProvider>
//       <QueryClientProvider client={client}>
//         <Router>
//           <App />
//         </Router>
//       </QueryClientProvider>
//     </UserContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

