import React from 'react';
import WorkRow from './work_row'

const WorkList = (props) => { 
    const work = props.work;

    return (
        <div>   
            <h2>Work experience</h2>         
            {work.map((w) => {
                return (
                    <div key={w.id}>
                        <WorkRow work={w} />
                    </div>
                );
            })}
        </div>
    );
}

export default WorkList;