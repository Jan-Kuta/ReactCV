import React from 'react';
import UserDetailRow from './user_detail_row';

const EducationRow = (props) => { 
    const ed = props.ed;
    
    let degree = "";
    if (ed.degree){
        degree = `(${ed.degree})`;
    }

    let thesis = "";
    if (ed.thesis){
        thesis = <div><span className="font-italic">Thesis:</span> {ed.thesis}</div>;
    }

    return (
        <div className="mb-3">   
            <div>{new Date(ed.startDate).getFullYear() + " - " + (ed.endDate ? new Date(ed.endDate).getFullYear(): "now")}</div>
            <div><span className="font-weight-bold">{ed.schoolName}, </span>{ed.faculty}</div>
            <div>{`${ed.major} ${degree}`}</div>
            {thesis}
        </div>
    );
}

export default EducationRow;