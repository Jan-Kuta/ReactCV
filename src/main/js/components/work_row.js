import React from 'react';

const WorkRow = (props) => { 
    const work = props.work;
    
    return (
        <div>   
            <div>{new Date(work.startDate).getFullYear() + " - " + new Date(work.endDate).getFullYear()}</div>
            <div><span className="font-weight-bold">{work.schoolName}, </span>{work.faculty}</div>
            <div>{`${work.major} (${work.degree})`}</div>
            <div><span className="font-italic">Thesis:</span> {work.thesis}</div>
        </div>
    );
}

export default WorkRow;