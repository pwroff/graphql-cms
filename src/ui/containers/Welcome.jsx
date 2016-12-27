/**
 * Created by Leonid on 26/12/16.
 */
import React, {Component} from 'react';
import {Row, ListGroup, ListGroupItem, Col, Button, FormGroup, FormControl} from 'react-bootstrap';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgs: [],
            msg: ''
        };
        this._handleUpdate = this._handleUpdate.bind(this);
    }

    componentDidMount() {
    }

    _handleUpdate(data) {
        const {msgs} = this.state;
        msgs.push(data.msg);
        this.setState({msgs})
    }

    render() {

        const ms = this.state.msgs.map((m, i) => {
            return <ListGroupItem key={i}>{m}</ListGroupItem>
        });

        return (
            <div>
                <Row>
                    <Col><h2>List of messages</h2></Col>
                </Row>
                {this._getFetchedData()}
            </div>
        )
    }

    _getFetchedData() {
        const {loading, items} = this.props.data;
        if (loading) {
            return <Row><h2>Loading data...</h2></Row>
        } else {

            const its = items.map(it => {
                return(
                    <Col xs={12} md={6} key={it.id}>
                        <ListGroup >
                            <ListGroupItem>{it.title}</ListGroupItem>
                            <ListGroupItem onClick={()=>{}}>{it.type}</ListGroupItem>
                        </ListGroup>
                    </Col>
                )
            });
            return (
                <Row>
                    {its}
                </Row>
            )
        }
    }
}

// Initialize GraphQL queries or mutations with the `gql` tag
const MyQuery = gql`query Items {
    items {
        id
        title
        type
    }
}`;

// We then can use `graphql` to pass the query results returned by MyQuery
// to MyComponent as a prop (and update them as the results change)
export default graphql(MyQuery)(Welcome);
