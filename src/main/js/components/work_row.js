import React from 'react';

const WorkRow = (props) => { 
    const work = props.work;
    
    return (
        <div className="mb-3">   
            <div>{new Date(work.startDate).getFullYear() + " - " + ( work.endDate ? new Date(work.endDate).getFullYear() : "now" )}</div>
            <div><span className="font-italic">{work.position}</span> - <span className="font-weight-bold">{work.company}, </span> ({work.type})</div>
            <div>{work.address}, <a className="text-dark" href={work.webpage}>{work.webpage}</a></div>
            <div className="pl-4" dangerouslySetInnerHTML={{__html: work.notes }}></div>
        </div>
    );
}

export default WorkRow;