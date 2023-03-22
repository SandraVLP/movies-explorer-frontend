import React from 'react';
import { Navigate} from "react-router-dom";

const ProtectedRoute = (props) => {
  if (!props.isLoaded) {
    return <></>;
  }
  return (props.hasAccess ? <>{props.children}</> : <Navigate to="/signup" />)
}

export default ProtectedRoute;