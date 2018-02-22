import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectCV, fetchCVs} from '../actions/index';

class CVList extends Component {
    componentDidMount(){
        this.props.fetchCVs();
        if (this.props.match.params.id){
            this.props.selectCV(this.props.match.params.id);
        }
        
    }

    renderList(){
        return this.props.CVs.map((cv) => {
            const className = `list-group-item text-right ${ this.props.cv && this.props.cv.id == cv.id ? "active" : ""}`;
            return (
                <li 
                    className={className} 
                    key={cv.id} 
                    onClick={() => {
                        this.props.history.push("/cv/"+cv.id);
                        this.props.selectCV(cv.id);
                    }}
                >{cv.username} <span className="fa fa-edit" onClick={(event) => {
                        event.stopPropagation();
                        this.props.history.push("/edit/"+cv.id);
                    }}></span></li>
            );
        });
    }

    render(){
        return (
            <div>
                <h1>CVs</h1>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        CVs: state.CVs,
        cv: state.selectedCV
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
         selectCV: selectCV,
         fetchCVs: fetchCVs
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CVList));