/**
 * Created by Leonid on 23/01/17.
 */
import React, {Component, PropTypes} from 'react';
import { graphql } from 'react-apollo';
import createDivision from '../mutations/createDivision.graphql';
import {Form, FormGroup, Col, Row, FormControl, Button, ControlLabel, Textarea} from 'react-bootstrap';

@graphql(createDivision, {name: 'createDivision'})
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

        this.props.createDivision({
            variables:this.state
        }).then((data)=>{
            console.log('Created', data);
            this.props.onCreate && this.props.onCreate(this.state);
            this.setState({
                title: '',
                description: ''
            })
        });

    }

    render() {
        const change = (e)=>{
            this.setState({
                [e.target.name]: e.target.value
            });
        };
        return (
            <div>
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
            </div>
        )
    }
}

CreateDivisionForm.propTypes = {
    onCreate: PropTypes.func,
};

export default CreateDivisionForm;
