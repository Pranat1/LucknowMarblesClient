import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductsQuery } from '../../queries/queries';
import {flowRight as compose} from 'lodash';
import ProductDetails from './ProductDetails'


class DisplayProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        };
    }

    calculateArea(item){
        var area = 0;
        for (var i = 0; i < item.lotts.length; i++){
            for(var j = 0; j < item.lotts[i].pieces.length; j++){
                area += item.lotts[i].pieces[j].length*item.lotts[i].pieces[j].width;
            }
        }
        return area;
    }
    displayProducts(){
        var data = this.props.getProductsQuery

        if(data.loading){
            return( <h3>Loading products</h3> );
        } else {
            return data.products.map(item => {
                return( <tr><td><button onClick={ (e) => this.setState({ selected: item.id }) }key={ item.id
                } value={item.id
                }>{ item.name }</button></td>
                <td>{ item.unit }</td>
                <td>{ item.color }</td>
                <td>{ item.productType }</td>
                <td>{ item.placeOfOrigin }</td>
                <td>{ this.calculateArea(item)/144}</td>
                </tr> );
            });
        }
    }
    render(){
        return(
            <div><table>
                <tr><th>Products Name</th></tr>
                {this.displayProducts()}
                </table>
                <ProductDetails productId={this.state.selected}/>
            </div>
        );
    } 
}


//export default AddProduct;


export default compose(
    graphql(getProductsQuery, { name: "getProductsQuery" })
)(DisplayProducts);


