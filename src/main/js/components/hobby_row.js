import React from 'react';

const HobbyRow = (props) => { 
    const hobby = props.hobby;
    
    return (
        <div>   
            {hobby.notes}
        </div>
    );
}

export default HobbyRow;