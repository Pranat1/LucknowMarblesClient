import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getPlacesQuery , getFirmsQuery, getProductsQuery, addSaleMutation } from '../../queries/queries';
import {flowRight as compose} from 'lodash';


class AddSale extends Component {
    constructor(props){
        super(props);
        this.state = {
            firmId: '',
            pricePer: 0,
            cutOrUncut: '',
            productId: '',
            date: '',
            time: '', 
            placeId: '',
            billNumber: 0,
            CustomerName: '',

        };
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

    submitForm(e){
    
        e.preventDefault();
        this.props.addSaleMutation(
            {
                variables:{
                    firmId: this.state.firmId,
                    pricePer:  this.state.pricePer,
                    cutOrUncut:  this.state.cutOrUncut,
                    productId:  this.state.productId,
                    date:  this.state.date,
                    time:  this.state.time, 
                    placeId:  this.state.placeId,
                    billNumber:  this.state.billNumber,
                    CustomerName:  this.state.CustomerName,
                }
            }
        );
    }

   
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this)}>
                <h2>
                    Add Sale
                </h2>

                <div className="field">
                    <label>Date:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ date: e.target.value }) }/>
                </div>
                <div className="field">
                    <label>Time:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ time: e.target.value }) }/>
                </div>
                <div className="field">
                    <label>BillNumber:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ billNumber: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>PricePer:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ pricePer: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>CutOrUncut:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ cutOrUncut: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Firm:</label>
                    <select onChange={ (e) => this.setState({ firmId: e.target.value }) } >
                        <option>Select Firm</option>
                        { this.displayFirms() }
                    </select>
                </div>
                <div className="field">
                    <label>Product:</label>
                    <select onChange={ (e) => this.setState({ productId: e.target.value }) } >
                        <option>Select Product</option>
                        { this.displayProduct() }
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
    graphql(getProductsQuery, { name: "getProductsQuery" }),
    graphql(getPlacesQuery, { name: "getPlacesQuery" }),
    graphql(getFirmsQuery, { name: "getFirmsQuery" }),
    graphql(addSaleMutation, { name: "addSaleMutation" })
)(AddSale);

