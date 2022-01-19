import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getPlacesQuery , getFirmsQuery , addLottMutation, getProductsQuery, getPurchasesQuery} from '../../queries/queries';
import {flowRight as compose} from 'lodash';


class AddLott extends Component {
    constructor(props){
        super(props);
        this.state = {
            purchaseId: '',
            nameId: 0,
            productId: '',
            pricePer: 0,
            placeId: '',
            origin: '',
            firmId: ''

        };
    }
    displayPlaces(){
        var data = this.props.getPlacesQuery;
        //var data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading Places</option> );
        } else {
            return data.places.map(item => {
                return( <option key={ item.id
                } value={item.id
                }>{ item.name }</option> );
            });
        }
    }
    displayFirms(){
        var data = this.props.getFirmsQuery;
        if(data.loading){
            return( <option disabled>Loading Firms</option> );
        } else {
            return data.firms.map(item => {
                return( <option key={ item.id
                } value={item.id
                }>{ item.name }</option> );
            });
        }
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
    displayPurchase(){
        var data = this.props.getPurchasesQuery;
        //var data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading purchase</option> );
        } else {
            return data.purchases.map(item => {
                return( <option key={ item.id
                } value={item.id
                }>{ item.billNumber }</option> );
            });
        }
    }
    submitForm(e){
    
        e.preventDefault();
        this.props.addLottMutation(
            {
                variables:{
                    nameId: this.state.nameId,
                    productId: this.state.productId,
                    pricePer: this.state.pricePer,
                    placeId: this.state.placeId,
                    origin: this.state.origin,
                    firmId: this.state.firmId,
                    purchaseId: this.state.purchaseId
                }
            }
        );
    }
   
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this)}>
                <h2>
                    Add Lott
                    </h2>
                <div className="field">
                    <label>NameId:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ nameId: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>PricePer:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ pricePer: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Origin:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ origin: e.target.value }) }/>
                </div>

                <div className="field">
                    <label>Product:</label>
                    <select onChange={ (e) => this.setState({ productId: e.target.value }) } >
                        <option>Select Product</option>
                        { this.displayProduct() }
                    </select>
                </div>
                <div className="field">
                    <label>Firm:</label>
                    <select onChange={ (e) => this.setState({ firmId: e.target.value }) } >
                        <option>Select Firm</option>
                        { this.displayFirms() }
                    </select>
                </div>
                <div className="field">
                    <label>Place:</label>
                    <select onChange={ (e) => this.setState({ placeId: e.target.value }) } >
                        <option>Select Place</option>
                        { this.displayPlaces() }
                    </select>
                </div>
                <div className="field">
                    <label>Purchase:</label>
                    <select onChange={ (e) => this.setState({ purchaseId: e.target.value }) } >
                        <option>Select Purchase</option>
                        { this.displayPurchase() }
                    </select>
                </div>

                <button>+</button>

            </form>
        );
    } 
}


//export default AddProduct;


export default compose(
    graphql(getPurchasesQuery, { name: "getPurchasesQuery" }),
    graphql(addLottMutation, { name: "addLottMutation" }),
    graphql(getPlacesQuery, { name: "getPlacesQuery" }),
    graphql(getFirmsQuery, { name: "getFirmsQuery" }),
    graphql(getProductsQuery, { name: "getProductsQuery" })
)(AddLott);

