import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

const ProductSpecification = () => {
    return (
        <Table>
            <thead>
                <tr>
                    <td>Column1</td>
                </tr>
            </thead>
            <tbody>
                <tr><td>Test</td></tr>
            </tbody>
        </Table>
    );
};

const mapStateToProps = state => (
    {
        ...state,
        url1: state.url1,
        url2: state.url2
    }
);

export default connect(mapStateToProps)(ProductSpecification);