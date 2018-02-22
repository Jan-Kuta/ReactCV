import React, { Component} from 'react';
import {connect} from 'react-redux';
import UserDetailList from '../components/user_detail_list';
import SkillList from '../components/skill_list';
import EducationList from '../components/education_list';
import WorkList from '../components/work_list';

class CVDetail extends Component{
    render() {
        if (!this.props.cv){
            return <h2>Select a name to get started.</h2>;
        }

        return (
            <div className="box p-0">
                <div className="row no-gutters">
                    <div className="col-4">
                        <div className="bg-primary text-white p-2 text-center">
                            <h2>
                                {this.props.cv.firstname + " " + this.props.cv.lastname}
                            </h2>
                            <img src="https://picsum.photos/120/180" className="rounded" alt="avatar" />
                        </div>
                        <div className="bg-info text-white p-2">
                            <UserDetailList {...this.props.cv}/>
                            <br />
                            <SkillList skills={this.props.cv.skills.sort((a, b) => { return a.id - b.id; })} />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="bg-success text-white p-2 h-100">                            
                            <WorkList work={this.props.cv.work.sort((a,b) => {return a.startDate - b.startDate;})} />
                            <br />
                            <EducationList education={this.props.cv.education.sort((a,b) => {return a.startDate - b.startDate;})}/>
                            <br />
                        </div>
                    </div>
                </div>
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