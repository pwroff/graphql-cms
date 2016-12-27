/**
 * Created by Leonid on 26/12/16.
 */
import React, {Component} from 'react';
import io from 'socket.io-client';
import {Row, ListGroup, ListGroupItem, Col, Button, FormGroup, FormControl} from 'react-bootstrap';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgs: [],
            msg: ''
        };
        this._handleUpdate = this._handleUpdate.bind(this);
    }

    componentDidMount() {
        this._io = io();
        this._io.on('update', this._handleUpdate);
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
            <Row>
                <Col><h2>List of messages</h2></Col>
                <Col xs={12} md={6} >
                    <ListGroup>
                        {ms}
                    </ListGroup>
                </Col>
                <Col xs={12} md={6}>
                    <FormGroup bsSize='large'>
                        <FormControl type="text" placeholder="Your message goes here" value={this.state.msg} onChange={(e)=>{
                            this.setState({msg: e.target.value});
                        }}/>
                    </FormGroup>
                    <Button bsStyle='primary' onClick={()=>{
                        const {msg} = this.state;
                        this._io.emit('receive', {query: msg});
                        this.setState({msg: ''})
                    }}>
                        Send Message
                    </Button>
                </Col>
            </Row>
        )
    }
}
