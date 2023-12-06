import React from 'react';
import './errors.css';
const Errors = ({errorType, errorMessage}) =>{
    return(
        <div className={`error alert alert-${errorType} ${errorType}`}>
        {errorMessage}
        </div>
    )
}

export default Errors;