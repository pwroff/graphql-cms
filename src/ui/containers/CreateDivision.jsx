/**
 * Created by Leonid on 23/01/17.
 */
import React, {Component, PropTypes} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Form, FormGroup, Col, Row, FormControl, Button, ControlLabel, Textarea} from 'react-bootstrap';

class CreateDivisionForm extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            title: '',
            description: ''
        };
    }

    submit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        const change = (e)=>{
            this.setState({
                [e.target.name]: e.target.value
            });
        };
        return (
            <Row>
                <h3>Create Division</h3>
                <Form horizontal onSubmit={this.submit.bind(this)}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Title
                        </Col>
                        <Col sm={10}>
                            <input
                                onChange={change}
                                className="form-control"
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={this.state.title}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Description
                        </Col>
                        <Col sm={10}>
                            <textarea
                                onChange={change}
                                className="form-control"
                                placeholder="Description"
                                name="description"
                                value={this.state.description}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Save
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Row>
        )
    }
}

CreateDivisionForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

const submitDivision = gql`
    mutation createDivision($title: String!, $description: String) {
        createDivision(title: $title, description: $description) {
            title
            description
        }
    }
`;

const CreateDivision = graphql(submitDivision, {
    props: ({ mutate }) => ({
        onSubmit: ({title, description}) => {
            mutate({ variables: { title, description} });
        }
    }),
})(CreateDivisionForm);

export default CreateDivision;
