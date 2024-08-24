//import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from './reduxstore/store.js'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     // <React.StrictMode>
//     <Provider store={store}>
// <<<<<<< HEAD
//         <BrowserRouter  basename='/Tours-Travels/'>
// =======
//     <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter>
// >>>>>>> finalbranch
//             <App />
//         </BrowserRouter>
//     </PersistGate>

//     </Provider >
//     // </React.StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename='/Tours-Travels/'>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
    // </React.StrictMode>,
)
