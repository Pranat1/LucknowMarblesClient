import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getPlacesQuery , getFirmsQuery , addLottMutation, getLottsQuery, getPurchasesQuery, getSalesQuery, addPieceMutation} from '../../queries/queries';
import {flowRight as compose} from 'lodash';


class AddPiece extends Component {
    constructor(props){
        super(props);
        this.state = {
            saleId: '',
            nameId: 0,
            lottId: '',
            placeId: '',
            firmId: '',
            width: 0,
            length: 0

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
    displayLott(){
        var data = this.props.getLottsQuery;
        //var data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading Lotts</option> );
        } else {
            return data.lotts.map(item => {
                return( <option key={ item.id
                } value={item.id
                }>{ item.nameId }</option> );
            });
        }
    }
    submitForm(e){
    
        e.preventDefault();
        this.props.addPieceMutation(
            {
                variables:{

                    saleId: this.state.saleId,
                    nameId: this.state.nameId,
                    lottId: this.state.lottId,
                    placeId: this.state.placeId,
                    firmId: this.state.firmId,
                    width: this.state.width,
                    length: this.state.length,
                }
            }
        );
    }
   
    render(){
        return(
            <form id="add-book" onSubmit={ this.submitForm.bind(this)}>
                <h2>
                    Add Piece
                    </h2>
                <div className="field">
                    <label>NameId:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ nameId: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Length:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ length: parseInt(e.target.value) }) }/>
                </div>
                <div className="field">
                    <label>Width:</label>
                    <input className="form-control" type="text" onChange={ (e) => this.setState({ width: parseInt(e.target.value) }) }/>
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
                    <label>Sale:</label>
                    <select onChange={ (e) => this.setState({ saleId: e.target.value }) } >
                        <option>Select Sale</option>
                        { this.displaySale() }
                    </select>
                </div>
                <div className="field">
                    <label>Lott:</label>
                    <select onChange={ (e) => this.setState({ lottId: e.target.value }) } >
                        <option>Select Lott</option>
                        { this.displayLott() }
                    </select>
                </div>

                <button>+</button>

            </form>
        );
    } 
}


//export default AddProduct;


export default compose(
    graphql(addPieceMutation, { name: "addPieceMutation" }),
    graphql(getPurchasesQuery, { name: "getPurchasesQuery" }),
    graphql(addLottMutation, { name: "addLottMutation" }),
    graphql(getPlacesQuery, { name: "getPlacesQuery" }),
    graphql(getFirmsQuery, { name: "getFirmsQuery" }),
    graphql(getLottsQuery, { name: "getLottsQuery" }),
    graphql(getSalesQuery, { name: "getSalesQuery" })

)(AddPiece);

