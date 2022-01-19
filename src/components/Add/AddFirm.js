import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addFirmMutation } from '../../queries/queries';
import {flowRight as compose} from 'lodash';


class AddFirm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''

        };
    }

    submitForm(e){
    
        e.preventDefault();
        this.props.addFirmMutation(
            {
                variables:{
                    name: this.state.name

                }
            }
        );
    }
   
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this)}>
                <h2>
                    Add Firm
                    </h2>
                <div className="field">
                    <label>Name:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ name: e.target.value }) }/>
                </div>

                <button>+</button>

            </form>
        );
    } 
}


//export default AddProduct;


export default compose(
    graphql(addFirmMutation, { name: "addFirmMutation" })
)(AddFirm);

