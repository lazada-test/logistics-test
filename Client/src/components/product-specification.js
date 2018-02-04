import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

const ProductSpecification = (props) => {
  debugger;
  const { products, specifications } = props;
  if (!products.length){
    return <div>Wrong</div>;
  }

  const firstProduct = products[0];
  const secondProduct = products.length > 1 && products[1];

  return (
    <Table>
      <tbody>
        {
          specifications.map(specification => {
            return (
              <tr>
                <td>{specification.description}</td>
                <td>{ firstProduct[specification.propertyName] }</td>
                <td>{ secondProduct[specification.propertyName] }</td>
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => (
  {
    ...state,
    products: state.products,
    specifications: state.specifications
  }
);

export default connect(mapStateToProps)(ProductSpecification);