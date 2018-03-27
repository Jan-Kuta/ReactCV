import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import CVDetail from '../containers/cv_detail';
import CVList from '../containers/cv_list';


class Home extends Component{ 

    render(){ 
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-auto"><CVList/></div>
                    <div className="col-md"><CVDetail/></div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);