import React, { Component} from 'react';
import {connect} from 'react-redux';

class CVDetail extends Component{
    render() {
        if (!this.props.cv){
            return <div>Select a CV to get started.</div>;
        }

        return (
            <h2>
                {this.props.cv.name}
            </h2>
        );
    }   
}

function mapStateToProps(state){
    return {
        cv: state.selectedCV
    };
}

export default connect(mapStateToProps)(CVDetail);