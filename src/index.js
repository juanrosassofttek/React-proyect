import React from 'react'
import ReactDom from 'react-dom'
//import App from './components/App'
import { Provider } from 'react-redux'

import App from './components/app/app'
import { createStore } from 'redux';
import reducers  from './reducers/reducers'

ReactDom.render(
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>,
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);


