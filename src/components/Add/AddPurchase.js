import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addPurchaseMutation , getFirmsQuery, getExpensessQuery } from '../../queries/queries';
import {flowRight as compose} from 'lodash';


class AddPurchase extends Component {
    constructor(props){
        super(props);
        this.state = {
            royelty:'',
            weight:'',
            firmId: '',
            date: '',
            time: '',
            billNumber: 0,
            expensesId: ''

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
    displayExpenses(){
        var data = this.props.getExpensessQuery;
        if(data.loading){
            return( <option disabled>Loading Firms</option> );
        } else {
            return data.expensess.map(item => {
                return( <option key={ item.id
                } value={item.id
                }>{ item.biltyNumber }</option> );
            });
        }
    }

    submitForm(e){
    
        e.preventDefault();
        this.props.addPurchaseMutation(
            {
                variables:{
                    royelty: this.state.royelty,
                    weight: this.state.weight,
                    firmId: this.state.firmId,
                    expensesId: this.state.expensesId,
                    date: this.state.date,
                    time: this.state.time,
                    billNumber: this.state.billNumber
                }
            }
        );
    }

   
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this)}>
                <h2>
                    Add Purchase
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
                    <label>Royelty:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ royelty: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Weight:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ weight: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Firm:</label>
                    <select onChange={ (e) => this.setState({ firmId: e.target.value }) } >
                        <option>Select Firm</option>
                        { this.displayFirms() }
                    </select>
                </div>
                <div className="field">
                    <label>Expenses:</label>
                    <select onChange={ (e) => this.setState({ expensesId: e.target.value }) } >
                        <option>Select Expenses</option>
                        { this.displayExpenses() }
                    </select>
                </div>
                

                <button>+</button>

            </form>
        );
    } 
}


//export default AddProduct;


export default compose(
    graphql(getExpensessQuery, { name: "getExpensessQuery" }),
    graphql(addPurchaseMutation, { name: "addPurchaseMutation" }),
    graphql(getFirmsQuery, { name: "getFirmsQuery" })
)(AddPurchase);

