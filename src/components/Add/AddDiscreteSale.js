import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addDiscreteSaleMutation, getSalesQuery, getDiscreteProductEntryQuery } from '../../queries/queries';
import {flowRight as compose} from 'lodash';


class AddDiscreteSale extends Component {
    constructor(props){
        super(props);
        this.state = {
            discreteProductEntryId: '',
            quantity: 0,
            saleId: '',

        };
    }

    submitForm(e){
    
        e.preventDefault();
        this.props.addDiscreteSaleMutation(
            {
                variables:{
                    discreteProductEntryId: this.state.discreteProductEntryId,
                    quantity: this.state.quantity,
                    saleId: this.state.saleId,
   

                }
            }
        );
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
    displaySale(){
        var data = this.props.getSalesQuery;
        //var data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading purchase</option> );
        } else {
            return data.sales.map(item => {
                return( <option key={ item.id
                } value={item.id
                }>{ item.billNumber }</option> );
            });
        }
    }
    
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this)}>
                <h2>
                    Add Discrete Sale 
                    </h2>
                <div className="field">
                    <label>Quantity:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ quantity: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Sale:</label>
                    <select onChange={ (e) => this.setState({ saleId: e.target.value }) } >
                        <option>Select Sale</option>
                        { this.displaySale() }
                    </select>
                </div>
                <div className="field">
                    <label>DiscreteProductEntry:</label>
                    <select onChange={ (e) => this.setState({ discreteProductEntryId: e.target.value }) } >
                        <option>Select DiscreteProductEntry</option>
                        { this.displayDiscreteProductEntry() }
                    </select>
                </div>

                <button>+</button>

            </form>
        );
    } 
}


//export default AddProduct;


export default compose(
    graphql(getDiscreteProductEntryQuery, { name: "getDiscreteProductEntryQuery" }),
    graphql(addDiscreteSaleMutation, { name: "addDiscreteSaleMutation" }),
    graphql(getSalesQuery, { name: "getSalesQuery" }),
)(AddDiscreteSale);

