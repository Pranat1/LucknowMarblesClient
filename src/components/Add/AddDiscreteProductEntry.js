import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addDiscreteProductEntryMutation, getProductsQuery } from '../../queries/queries';
import {flowRight as compose} from 'lodash';


class AddDiscreteProductEntry extends Component {
    constructor(props){
        super(props);
        this.state = {
            length: 0,
            width:0,
            height:0,
            pricePer:0,
            productId:''

        };
    }
    displayProduct(){
        var data = this.props.getProductsQuery;
        //var data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading products</option> );
        } else {
            return data.products.map(item => {
                return( <option key={ item.id
                } value={item.id
                }>{ item.name }</option> );
            });
        }
    }
    submitForm(e){
    
        e.preventDefault();
        this.props.addDiscreteProductEntryMutation(
            {
                variables:{
                    length: this.state.length,
                    width: this.state.width,
                    height:this.state.height,
                    pricePer: this.state.pricePer,
                    productId: this.state.productId

                }
            }
        );
    }
   
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this)}>
                <h2>
                    Add Discrete Product
                    </h2>

                <div className="field">
                    <label>Width:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ width:  parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Length:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ length: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Height:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ height:  parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>PricePer:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ pricePer:  parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Product:</label>
                    <select onChange={ (e) => this.setState({ productId: e.target.value }) } >
                        <option>Select Product</option>
                        { this.displayProduct() }
                    </select>
                </div>
 

                <button>+</button>

            </form>
        );
    } 
}


//export default AddProduct;


export default compose(
    graphql(addDiscreteProductEntryMutation, { name: "addDiscreteProductEntryMutation" }), 
    graphql(getProductsQuery, { name: "getProductsQuery" })
)(AddDiscreteProductEntry);

