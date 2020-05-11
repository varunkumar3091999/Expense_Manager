// Higher Order Component (H O C)  => a component that renders another component!!!
// reuse code
//render hijacking
//prop manipulation
//abstract class


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>the info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.</p>}
      <WrappedComponent {...props} />
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <p>This is private info.</p> || <p> PLease Login!</p>}
      <WrappedComponent {...props} />
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info)


// ReactDOM.render(<AdminInfo isAdmin={true} info='these are the details' />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={false} info='these are the details' />, document.getElementById('app'));