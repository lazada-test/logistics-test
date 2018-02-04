import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

const resolveColumn = (specification, product) => {
  if(!product) {
    return '';
  }
  return specification.description !== 'Description' ?
    product[specification.propertyName] :
    product.descriptions.map((value, i) => {
      if(!value.trim()){
        return '';
      }
      return <li key={`li-${i}`}>{value}</li>;
    });
};

const ProductSpecification = (props) => {
  const { products, specifications } = props;
  if (!products || !products.length){
    return <div>Empty</div>;
  }

  const firstProduct = products[0];
  const secondProduct = products.length > 1 && products[1];

  return (
    <Table bordered={true }>
      <tbody>
        {
          specifications.map((specification, i) => {
            return (
              <tr key={`row-${i}`}>
                <td width="20%">{ specification.description }</td>
                <td width="40%">
                  {
                    resolveColumn(specification, firstProduct)
                  }
                </td>
                <td width="40%">
                  {
                    resolveColumn(specification, secondProduct)
                  }
                </td>
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