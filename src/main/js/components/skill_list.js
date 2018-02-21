import React, {Component} from 'react';

class SkillList extends Component{
    render(){ 
        const skills = this.props.skills;
        const renderSkill = (skill) => {
            const styles={width: `${skill.level}%`};
            return (
                <div key={skill.id} className="popover__wrapper">
                    <div>
                        {skill.title} <div className="progress">
                            <div className="progress-bar bg-warning" style={styles} role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">{skill.level}%</div>
                        </div>
                    </div>
                    <div className="push popover__content">
                        <div className="popover__message">{skill.note}</div>
                    </div>
                </div>
            );
        };
        return (
            <div>   
                <h2>Skills</h2>         
                {skills.map(renderSkill)}
            </div>
        );
    }
}

export default SkillList;