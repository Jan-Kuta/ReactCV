import React from 'react';
import HobbyRow from './hobby_row'

const HobbyList = (props) => { 
    const hobbies = props.hobbies;

    return (
        <div>   
            <h2>Hobbies</h2>         
            {hobbies.map((h) => {
                return (
                    <div key={h.id}>
                        <HobbyRow hobby={h} />
                    </div>
                );
            })}
        </div>
    );
}

export default HobbyList;