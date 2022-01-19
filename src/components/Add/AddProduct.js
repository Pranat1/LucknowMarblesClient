import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addProductMutation } from '../../queries/queries';
import {flowRight as compose} from 'lodash';


class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            unit: '',
            color: '',
            productType: '',
            placeOfOrigin: ''

        };
    }
    
    submitForm(e){
    
        e.preventDefault();
        this.props.addProductMutation(
            {
                variables:{

                    name: this.state.name,
                    unit: this.state.unit,
                    color: this.state.color,
                    productType: this.state.productType,
                    placeOfOrigin: this.state.placeOfOrigin


                }
            }
        );
    }
   
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this)}>
                <h2>
                    Add Product
                    </h2>

                <div className="field">
                    <label>Name:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ name: e.target.value }) }/>
                </div>
                <div className="field">
                    <label>Unit:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ unit: e.target.value }) }/>
                </div>
                <div className="field">
                    <label>Color:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ color: e.target.value }) }/>
                </div>
                <div className="field">
                    <label>ProductType:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ productType: e.target.value }) }/>
                </div>
                <div className="field">
                    <label>PlaceOfOrigin:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ placeOfOrigin: e.target.value }) }/>
                </div>
                <button>+</button>

            </form>
        );
    } 
}


//export default AddProduct;


export default compose(
    graphql(addProductMutation, { name: "addProductMutation" })
)(AddProduct);


