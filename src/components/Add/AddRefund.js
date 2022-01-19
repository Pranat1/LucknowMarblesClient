import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addRefundMutation } from '../../queries/queries';
import {flowRight as compose} from 'lodash';


class AddRefund extends Component {
    constructor(props){
        super(props);
        this.state = {

            date: '',
            time: '', 
            billNumber: 0,


        };
    }




    submitForm(e){
    
        e.preventDefault();
        this.props.addRefundMutation(
            {
                variables:{

                    date:  this.state.date,
                    time:  this.state.time, 
                    billNumber:  this.state.billNumber,

                }
            }
        );
    }

   
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this)}>
                <h2>
                    Add Refund
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

                <button>+</button>

            </form>
        );
    } 
}


//export default AddProduct;


export default compose(
    graphql(addRefundMutation, { name: "addRefundMutation" })
)(AddRefund);

