import React, { Component } from 'react';
import AddProduct from '../components/Add/AddProduct';
import AddDiscreteProductEntry from '../components/Add/AddDiscreteProductEntry';
import DisplayProducts from '../components/DisplayData/DisplayProducts';




class ProductPage extends Component {
  render() {
    return (
    <div><h1>The Product Page</h1>
        <DisplayProducts/>
        <AddProduct/>
        <AddDiscreteProductEntry/>
    </div>);
  }
}



export default ProductPage;