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
            selectedFilters: {
                type: null,
                width: null,
                height: null,
                radius: null
            }
        }
    }

    render() {
        return this._getFetchedData();
    }

    _getFetchedData() {
        const {loading, items} = this.props;
        if (loading) {
            return <Row>
                <Col xs={12} className='text-center'><h2>Loading...</h2></Col>
            </Row>
        } else {

            const cP = {
                xs: 6, sm:4, md:3
            };


            const its = items.map(({title, type, width, height, radius, id}) => {
                return(
                    <Col {...cP} key={id}>
                        <ListGroup >
                            <ListGroupItem>{title}</ListGroupItem>
                            <ListGroupItem onClick={this._updateFilter.bind(this, {type})}>{type}</ListGroupItem>
                            <ListGroupItem onClick={this._updateFilter.bind(this, {width})}>Width: {width}</ListGroupItem>
                            <ListGroupItem onClick={this._updateFilter.bind(this, {height})}>Height: {height}</ListGroupItem>
                            <ListGroupItem onClick={this._updateFilter.bind(this, {radius})}>R {radius}</ListGroupItem>
                        </ListGroup>
                    </Col>
                )
            });

            const {selectedFilters: sfs} = this.state;

            const filters = Object.keys(sfs).map((f, i) => {
                return sfs[f] && (
                        <Col {...cP} key={f}>
                            <ListGroup >
                                <ListGroupItem>{f}</ListGroupItem>
                                <ListGroupItem onClick={()=>{
                                    this._updateFilter({[f]:null});
                                }}>{sfs[f]}</ListGroupItem>
                            </ListGroup>
                        </Col>
                    )
            });
            return (
                <div>
                    <Row>
                        <Col xs={12} className='text-center'>
                            <h2>Selected Filters</h2>
                        </Col>
                    </Row>
                    <Row>
                        {filters}
                    </Row>
                    <Row>
                        <Col xs={12} className='text-center'>
                            <h2>List of messages</h2>
                        </Col>
                    </Row>
                    <Row>
                        {its}
                    </Row>
                </div>

            )
        }
    }

    _updateFilter(selectedFilters) {
        selectedFilters = Object.assign({}, this.state.selectedFilters, selectedFilters);
        this.setState({selectedFilters}, ()=>{
            this.props.updateFilter(selectedFilters);
        })
    }
}

// Initialize GraphQL queries or mutations with the `gql` tag
const MyQuery = gql`query Items($type: String, $width: Int, $height: Int, $radius: Int) {
    items(type: $type, width: $width, height: $height, radius: $radius) {
        id
        title
        type
        width
        height
        radius
    }
}`;

// We then can use `graphql` to pass the query results returned by MyQuery
// to MyComponent as a prop (and update them as the results change)
export default graphql(MyQuery, {
    // This function re-runs every time `data` changes, including after `updateQuery`,
    // meaning our loadMoreEntries function will always have the right cursor
    props({ data: { loading, items, fetchMore } }) {
        return {
            loading,
            items,
            updateFilter: (variables) => {
                return fetchMore({
                    query: MyQuery,
                    variables,
                    updateQuery: (previousResult, { fetchMoreResult }) => {

                        return {
                            items: fetchMoreResult.data.items,
                        };
                    },
                });
            },
        };
    },
})(Welcome);
