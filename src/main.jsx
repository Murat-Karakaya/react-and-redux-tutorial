import React from 'react'
import { Provider } from "react-redux";
import {store} from "./redux-stuff/redux"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*The provider simply provides th redux states. If you put <App /> component
    out of the provider. The Website gives an error. Because the whole website
    won't have acces to store. Go ahead, try it.*/
    }
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
