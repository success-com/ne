import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from "./logo.jpg"

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

const Loading = () => {
  return (
    <div className="animesusp" style={{width: "100vw", height:"90vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <img className="logo" alt="" src={logo}/>
     <p>🌀 Loading...</p>
    </div>
    )
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
