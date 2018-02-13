import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import CVDetail from './containers/cv_detail';
import CVList from './containers/cv_list';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => { 
    return (
        <div>
            <CVList/>
            <CVDetail/>
        </div>
    );
} 

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
