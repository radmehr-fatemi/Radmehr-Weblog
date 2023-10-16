import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

//Component
import App from './App.jsx';

//Style
import './index.css';
import "./style/fonts";

//Client
const client = new ApolloClient({
  uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clnsf3thxqk2u01ujepvk22sy/master",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client} >
    <App />
   </ApolloProvider>
)
