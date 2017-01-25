/**
 * Created by Leonid on 23/01/17.
 */
import React, {Component, PropTypes} from 'react';
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

const DivDesc = ({title, description, created, items}) => {
    created = parseInt(created);
    return (
        <ListGroup>
            <ListGroupItem><h2>{title}</h2></ListGroupItem>
            <ListGroupItem><h6>{new Date(created).toLocaleString()}</h6></ListGroupItem>
            <ListGroupItem><h4>{description}</h4></ListGroupItem>
            <ListGroupItem><h4>Items in division <strong>{items.length}</strong></h4></ListGroupItem>
        </ListGroup>
    )
};

export default class DivisionsList extends Component {
    static propTypes = {
        divisions: PropTypes.array
    };

    render() {
        return (
            <Row>
                {this.getDivisions()}
            </Row>
        )
    }

    getDivisions() {
        return this.props.divisions.map((d,i)=>{
            return (
                <Col sm={6} key={i}>
                    <DivDesc {...d}/>
                </Col>
            )
        });
    }
}
