import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectCV, fetchCVs} from '../actions/index';

class CVList extends Component {
    componentDidMount(){
        this.props.fetchCVs();
    }

    renderList(){
        return this.props.CVs.map((cv) => {
            return (
                <li key={cv.id} onClick={() => this.props.selectCV(cv.id)}>{cv.username}</li>
            );
        });
    }

    render(){
        return (
            <div>
                <h1>CV List</h1>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        CVs: state.CVs
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
         selectCV: selectCV,
         fetchCVs: fetchCVs
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CVList);