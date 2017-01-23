import React, {Component, PropTypes} from 'react';
import CreateDivision from '../containers/CreateDivision';

const Division = ({params, submit}) => {
    return (
        <div className="page">
            <h1>This is division {params.id}</h1>
            <CreateDivision/>
        </div>
    )
};
export default Division;
