import React from 'react';

const WorkRow = (props) => { 
    const work = props.work;
    let workPosition = "";
    if(work.position){
        workPosition = (
            <span className="font-italic">{work.position} -</span>
        );
    }
    let workType = "";
    if(work.type){
        workType = "("+work.type+")";
    }   
    let secondLine = "";
    let www = "";
    if (work.webpage){
        www=<a target="_blank" className="text-dark" href={work.webpage}>{work.webpage}</a>;
    }
    if(work.addres || work.webpage){
        secondLine = (
            <div>
                {`${work.address ? work.address + (work.webpage ? ", " : ""): "" }`}
                {www}
            </div>
        );
    }
    return (
        <div className="mb-3">   
            <div>{new Date(work.startDate).getFullYear() + " - " + ( work.endDate ? new Date(work.endDate).getFullYear() : "now" )}</div>
            <div>{workPosition} <span className="font-weight-bold">{work.company}</span> {workType}</div>
            {secondLine}
            <div className="pl-4" dangerouslySetInnerHTML={{__html: work.notes }}></div>
        </div>
    );
}

export default WorkRow;