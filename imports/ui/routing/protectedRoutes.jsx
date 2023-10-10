import React from 'react'
import { Navigate } from 'react-router-dom';
import {Meteor} from "meteor/meteor"



function UserProtectedRoutes(props) {
   


  if (Meteor.userId()) {
      return props.children;
    }
  
    return <Navigate to="/login" />;
}

export default UserProtectedRoutes
