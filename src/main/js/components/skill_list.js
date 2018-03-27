import React, {Component} from 'react';

class SkillList extends Component{
    render(){ 
        const skills = this.props.skills;
        const renderSkill = (skill) => {
            const styles={width: `${skill.level}%`};
            let note = "";
            if (skill.note){
                note = (
                    <div className="push popover__content">
                        <div className="text-dark popover__message">{skill.note}</div>
                    </div>
                );
            }

            return (
                <div key={skill.id} className="popover__wrapper">
                    <div>
                        {skill.title} <div className="progress">
                            <div className="progress-bar bg-success" style={styles} role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">{skill.level}%</div>
                        </div>
                    </div>
                    {note}                    
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