import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

//Component
import App from './App.jsx';

//Style
import './style/index.css';
import "./style/fonts.css";

//Them
import theme from './mui/them.jsx';

//Client
const client = new ApolloClient({
  uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clnsf3thxqk2u01ujepvk22sy/master",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client} >
    <BrowserRouter>
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
)
