import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

const ProductSpecification = (props) => {
  const { products, specifications } = props;
  console.log(props);
  if (!products || !products.length){
    return <div>Empty</div>;
  }

  const firstProduct = products[0];
  const secondProduct = products.length > 1 && products[1];

  return (
    <Table>
      <tbody>
        {
          specifications.map((specification, i) => {
            return (
              <tr key={`row-${i}`}>
                <td>{ specification.description }</td>
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
    products: state.products,
    specifications: state.specifications
  }
);

export default connect(mapStateToProps)(ProductSpecification);