import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import CVDetail from './containers/cv_detail';
import CVList from './containers/cv_list';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => { 
    return (
        <div>
            <CVList/>
            <CVDetail/>
        </div>
    );
} 

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
