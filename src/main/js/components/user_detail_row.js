import React from 'react';
import FontAwesome from 'react-fontawesome';

const UserDetails = (props) => { 
    if (!props.text){
        return "";
    }

    return (
        <div> 
            <FontAwesome 
                name={props.iconName}
            /> {props.text}
        </div>
    );
}

export default UserDetails;