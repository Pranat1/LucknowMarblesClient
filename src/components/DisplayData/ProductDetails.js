import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductQuery } from '../../queries/queries';

class ProductDetails extends Component {
    displayProductDetails(){
        const { product } = this.props.data;
        if(product){
            return(
                <div>
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
                                return  <button>{piece.length}   X   {piece.width}</button>
                            })}</div>
                        })}
                    </ul>
                </div>
            );
        } else {
            return( <div>No book selected...</div> );
        }
    }
    render(){
        return(
            <div id="book-details">
                { this.displayProductDetails() }
            </div>
        );
    }
}

export default graphql(getProductQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.productId
            }
        }
    }
})(ProductDetails);