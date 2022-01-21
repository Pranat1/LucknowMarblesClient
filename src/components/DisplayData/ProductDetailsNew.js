import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { useLazyQuery, useQuery, useMutation } from "react-apollo";
import { graphql } from 'react-apollo';
import { getProductQuery, editPieceSaleMutation, getSalesQuery } from '../../queries/queries';
import {flowRight as compose} from 'lodash';

class ProductDetailsNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            pieceId :'',
            saleId : ''
        };
    }
    
    displayProductDetails(){
        const { product } = this.props.getProductQuery.data;
        if(product){
            return(
                <div>
                <div className="field">
                    <label>Sale:</label>
                    <select onChange={ (e) => this.setState({ saleId: e.target.value }) } >
                        <option>Select Sale</option>
                        { this.displaySale() }
                    </select>
                </div>
                    <h2>{ product.name }</h2>
                    <p>{ product.unit }</p>
                    <p>{ product.color }</p>
                    <p>{ product.thickness }</p>
                    <p>{ product.productType }</p>
                    <p>{ product.placeOfOrigin }</p>
                    <p>Lotts</p>
                    <ul className="other-books">
                        { product.lotts.map(lott => {
                            return <div><h3>{lott.nameId}</h3> {lott.pieces.map(piece => {
                                return  <button onClick={(e) => {
                                    this.submitClick(e);
                                    this.setState({ pieceId: piece.id     
                                    })
                                }}>{piece.length}   X   {piece.width}</button>
                            })}</div>
                        })}
                    </ul>
                </div>
            );
        } else {
            return( <div>No book selected...</div> );
        }
    }
    displaySale(){
        var data = this.props.getSalesQuery;
        //var data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading Sails</option> );
        } else {
            return data.sails.map(item => {
                return( <option key={ item.id
                } value={item.id
                }>{ item.billNumber + " " + item.date}</option> );
            });
        }
    }
    
    submitClick(e){
    
        e.preventDefault();
        this.props.editPieceSaleMutation(
            {
                variables:{
                    pieceId: this.state.pieceId,
                    saleId: this.state.saleId,
                }
            }
        );
    }

    render(){
        return(
            <div id="book-details">
                { this.displayProductDetails() }
            </div>
        );
    }
}



export default compose(
    graphql(getSalesQuery, { name: "getSalesQuery" }),
    graphql(editPieceSaleMutation, { name: "editPieceSaleMutation" }),
    graphql(getProductQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.productId
            }
        }
    }
}))(ProductDetailsNew);