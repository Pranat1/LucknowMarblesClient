import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getFirmsQuery, getDiscreteProductEntryQuery, getPurchasesQuery, getPlacesQuery, addDiscretePurchaseMutation } from '../../queries/queries';
import {flowRight as compose} from 'lodash';


class AddDiscretePurchase extends Component {
    constructor(props){
        super(props);
        this.state = {
            discreteProductEntryId: '',
            quantity: 0,
            purchaseId: '',
            firmId: '',
            placeId: ''

        };
    }
    displayDiscreteProductEntry(){
        var data = this.props.getDiscreteProductEntryQuery;
        if(data.loading){
            return( <option disabled>Loading Firms</option> );
        } else {
            return data.discreteProductEntrys.map(item => {
                return( <option key={ item.id
                } value={item.id
                }>{ item.length + " " + item.width+ " " + item.product.name }</option> );
            });
        }
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

        this.props.addDiscretePurchaseMutation(
            {
                variables:{
                    discreteProductEntryId: this.state.discreteProductEntryId,
                    quantity: this.state.quantity,
                    purchaseId: this.state.purchaseId,
                    firmId: this.state.firmId,
                    placeId: this.state.placeId
                }
            }
        );

    }

   
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this)}>
                <h2>
                    Add Discrete Purchase
                    </h2>

                <div className="field">
                    <label>Quantity:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ quantity: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>DiscreteProductEntry:</label>
                    <select onChange={ (e) => this.setState({ discreteProductEntryId: e.target.value }) } >
                        <option>Select DiscreteProductEntry</option>
                        { this.displayDiscreteProductEntry() }
                    </select>
                </div>
                <div className="field">
                    <label>Purchase:</label>
                    <select onChange={ (e) => this.setState({ purchaseId: e.target.value }) } >
                        <option>Select Purchase</option>
                        { this.displayPurchase() }
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
                

                <button>+</button>

            </form>
        );
    } 
}


//export default AddProduct;

export default compose(
    graphql(addDiscretePurchaseMutation, { name: "addDiscretePurchaseMutation" }),
    graphql(getDiscreteProductEntryQuery, { name: "getDiscreteProductEntryQuery" }),
    graphql(getFirmsQuery, { name: "getFirmsQuery" }),
    graphql(getPurchasesQuery, { name: "getPurchasesQuery" }),
    graphql(getPlacesQuery, { name: "getPlacesQuery" })
)(AddDiscretePurchase);

