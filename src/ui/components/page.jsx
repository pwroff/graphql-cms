import React, {Component} from 'react';

const Page = ({params}) => {
    return (
        <div className="page">
            <h1>This is page {params.id}</h1>
        </div>
    )
};

export default Page;
