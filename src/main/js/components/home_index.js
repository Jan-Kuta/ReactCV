import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import CVDetail from '../containers/cv_detail';
import CVList from '../containers/cv_list';


class Home extends Component{ 

    render(){ 
        return (
            <div className="container-fluid">
                <div className="text-right">
                    <Link className="btn btn-success" to="/new">Add</Link>
                </div>
                <div className="row">
                    <div className="col-md-4"><CVList/></div>
                    <div className="col-md-8"><CVDetail/></div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);