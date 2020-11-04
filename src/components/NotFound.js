import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="wrapper">
            <h1>Not Found page</h1>
            <Link to="/" className="">Main</Link>
        </div>
    );
}
 
export default NotFound;