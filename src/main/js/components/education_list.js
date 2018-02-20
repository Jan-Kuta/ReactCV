import React from 'react';
import EducationRow from './education_row'

const EducationList = (props) => { 
    const eds = props.education;

    return (
        <div>   
            <h2>Education</h2>         
            {eds.map((ed) => {
                return (
                    <div key={ed.id}>
                        <EducationRow ed={ed} />
                    </div>
                );
            })}
        </div>
    );
}

export default EducationList;