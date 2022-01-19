import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addExpensesMutation } from '../../queries/queries';
import {flowRight as compose} from 'lodash';


class AddExpenses extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: '',
            biltyNumber: 0,
            freight: 0,
            loading: 0,
            unloading: 0,
            weight: 0, 

        };
    }

    submitForm(e){
    
        e.preventDefault();
        this.props.addExpensesMutation(
            {
                variables:{
                    date: this.state.date,
                    biltyNumber: this.state.biltyNumber,
                    freight: this.state.freight,
                    loading: this.state.loading,
                    unloading: this.state.unloading,
                    weight: this.state.weight, 

                }
            }
        );
    }
   
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this)}>
                <h2>
                    Add Expenses
                    </h2>
                <div className="field">
                    <label>BiltyNumber:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ biltyNumber: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Date:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ date: e.target.value }) }/>
                </div>
                <div className="field">
                    <label>Freight:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ freight: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Loading:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ loading: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Unloading:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ unloading: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Weight:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ weight: parseInt(e.target.value) }) }/>
                </div>


                <button>+</button>

            </form>
        );
    } 
}


//export default AddProduct;


export default compose(
    graphql(addExpensesMutation, { name: "addExpensesMutation" })
)(AddExpenses);

