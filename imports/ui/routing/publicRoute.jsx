import React from 'react'
import { Navigate } from 'react-router-dom';
import {Meteor} from "meteor/meteor"


function UserPublicRoutes(props) {

    console.log("public" ,Meteor.userId());
    if (Meteor.userId()) {
        console.log("public if case");

        return <Navigate to="/" />;
      }
     
      return props.children;
}

export default UserPublicRoutes
