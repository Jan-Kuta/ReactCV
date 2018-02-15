import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home_index';
import CVNew from './components/cv_new';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route exact path="/" render={() => (
                      <Redirect to="/cv"/>
                  )}/>
                <Route path="/cv" component={Home} />
                <Route path="/new" component={CVNew} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
