import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"
import { BrowserRouter } from "react-router-dom"
import { GlobalProvider } from './Globals';

import "../src/GlobalStyles.css";


// dl from https://www.youtube.com/watch?v=T2MhVxJxsL0
//this changed from deprecated render method.  
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <GlobalProvider>
  <React.StrictMode>
    <BrowserRouter>

      <App />
    </BrowserRouter>
  </React.StrictMode>
  </GlobalProvider>
)

