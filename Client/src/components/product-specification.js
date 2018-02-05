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
    return <div>Please insert any Lazada's links to compare</div>;
  }

  const firstProduct = products[0];
  const secondProduct = products.length > 1 && products[1];

  return (
    <Table bordered={true}>
      <tbody>
      <tr>
        <td className='col-spec'>
        </td>
        <td className='col-details'>
          <img src={firstProduct.image}/>
        </td>
        <td className='col-details'>
          <img src={secondProduct.image}/>
        </td>
      </tr>
      {
        specifications.map((specification, i) => {
          return (
            <tr key={`row-${i}`}>
              <td className='col-spec'>{specification.description}</td>
              <td className='col-details'>
                {
                  resolveColumn(specification, firstProduct)
                }
              </td>
              <td className='col-details'>
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