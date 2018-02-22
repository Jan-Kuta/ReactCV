import React from 'react';
import UserDetailRow from './user_detail_row';

const UserDetailList = (props) => { 
    return (
        <div>            
            <UserDetailRow iconName="star" text={props.birthdate ? new Date(props.birthdate).toLocaleDateString('cs') : null} />
            <UserDetailRow iconName="envelope" text={props.email} />
            <UserDetailRow iconName="phone" text={props.phone} />
            <UserDetailRow iconName="car" text={props.drivingLicence} />
            <UserDetailRow iconName="map-marker" text={props.address} />
            <UserDetailRow iconName="share-square" text={props.linkedinAccount} link={true}/>
            <UserDetailRow iconName="globe" text={props.webpage} link={true}/>
        </div>
    );
}

export default UserDetailList;