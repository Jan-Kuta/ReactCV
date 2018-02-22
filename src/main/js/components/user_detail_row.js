import React from 'react';
import FontAwesome from 'react-fontawesome';

const UserDetails = (props) => { 
    if (!props.text){
        return "";
    }
    const text = props.link ? <a className="text-white" target="_blank" href={props.text}>{props.text}</a> : `${props.text}`;
    return (
        <div> 
            <FontAwesome 
                name={props.iconName}
            /> {text}
        </div>
    );
}

export default UserDetails;