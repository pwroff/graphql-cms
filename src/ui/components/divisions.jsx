import React, {Component, PropTypes} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import CreateDivision from '../containers/CreateDivision';

const Division = ({params, onCreate}) => {
    return (
        <div className="page">
            <h1>This is division {params.id}</h1>
            <CreateDivision onSubmit={onCreate}/>
        </div>
    )
};

Division.propTypes = {
    onCreate: PropTypes.func
};

const submitDivision = gql`
    mutation Division($title: String!, $description: String) {
        createDivision(title: $title, description: $description) {
            title
            description
            created
        }
    }
`;

const DivisionWithGraph = graphql(submitDivision, {
    props: ({ ownProps, mutate }) => ({
        onCreate: ({title, description}) => {
            mutate(
                {
                    variables: { title, description}
                }
            );
        }
    }),
})(Division);

export default DivisionWithGraph;
