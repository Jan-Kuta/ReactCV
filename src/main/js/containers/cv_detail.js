import React, { Component} from 'react';
import {connect} from 'react-redux';

class CVDetail extends Component{
    render() {
        if (!this.props.cv){
            return <div>Select a CV to get started.</div>;
        }

        return (
            <div>
                <h2>
                    {this.props.cv.username}
                </h2>
                {this.props.cv.details.firstname + " " + this.props.cv.details.lastname}
            </div>
        );
    }   
}

function mapStateToProps(state){
    return {
        cv: state.selectedCV
    };
}

export default connect(mapStateToProps)(CVDetail);