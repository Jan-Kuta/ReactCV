import React from 'react';
import UserDetailRow from './user_detail_row';

const EducationRow = (props) => { 
    const ed = props.ed;
    
    return (
        <div>   
            <div>{new Date(ed.startDate).getFullYear() + " - " + new Date(ed.endDate).getFullYear()}</div>
            <div><span className="font-weight-bold">{ed.schoolName}, </span>{ed.faculty}</div>
            <div>{`${ed.major} (${ed.degree})`}</div>
            <div><span className="font-italic">Thesis:</span> {ed.thesis}</div>
        </div>
    );
}

export default EducationRow;