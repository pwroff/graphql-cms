import React, {Component, PropTypes} from 'react';
import { graphql } from 'react-apollo';
import CreateDivision from '../containers/CreateDivision';
import DivisionsList from '../containers/DivisionsList';
import {Grid, Row} from 'react-bootstrap';
import getAllDivisions from '../queries/getAllDivisions.graphql';

@graphql(getAllDivisions)
class Divisions extends Component{
    constructor(...args) {
        super(...args);

        this.state = {
            formOn: false
        }
    }

    render() {
        const {params, onCreate, data} = this.props;
        if (data.loading) {
            return (
                <Grid>
                    <Row>
                        <h1>Loading...</h1>
                    </Row>
                </Grid>
            )
        }
        return (
            <div>
                <Grid>
                    <Row>
                        <h1>This is division {params.id}</h1>
                    </Row>
                    <DivisionsList divisions={data.divisions}/>
                </Grid>
                <div style={
                {
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    maxWidth: '80%',
                    height: 'auto',
                    backgroundColor: '#fff',
                    borderRadius: '3px',
                    opacity: '.95',
                    padding: '20px'
                }
                }>
                    {this.createMore()}
                </div>
            </div>
        )
    }

    createMore() {
        if (this.state.formOn) {
            return (
                <CreateDivision onSubmit={this.props.onCreate} onCreate={()=>{
                    this.props.data.refetch();
                    this.setState({
                        formOn: false
                    })
                }}/>
            )
        }

        return (
            <div
                style={{
                    height: '60px',
                    width: '60px',
                    lineHeight: '60px',
                    borderRadius: '50%',
                    fontSize: '20px',
                    backgroundColor: `hsl(${180}, 94%, 50%)`,
                    color: '#fff',
                    textAlign: 'center',
                    margin: '20px',
                    boxShadow: '0 0 50px -20px rgba(0,0,0,.5)'
                }}
                onClick={
                    ()=>{
                        this.setState({
                            formOn: true
                        })
                    }
                }
            >+</div>
        )
    }

}

Divisions.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        divisions: PropTypes.array
    }),
    onCreate: PropTypes.func
};

export default Divisions;
