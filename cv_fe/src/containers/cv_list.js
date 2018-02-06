import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectCV} from '../actions/index';

class CVList extends Component {
    renderList(){
        return this.props.CVs.map((cv) => {
            return (
                <li key={cv.id} onClick={() => this.props.selectCV(cv)}>{cv.name}</li>
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
         selectCV: selectCV
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CVList);