import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/home_index';
import CVForm from './components/cv_form';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/cv/:id" component={Home} />
                    <Route exact path="/cv" component={Home} />
                    <Route path="/new" component={CVForm} />
                    <Route path="/edit/:id" component={CVForm} />
                    <Route path="/" render={() => (
                        <Redirect to="/cv"/>
                      )}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
