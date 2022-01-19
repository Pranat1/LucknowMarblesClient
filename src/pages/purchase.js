import React, { Component } from 'react';
import AddPurchase from '../components/Add/AddPurchase';
import AddExpenses from '../components/Add/AddExpenses'
import AddLott from '../components/Add/AddLott'
import AddPiece from '../components/Add/AddPiece'
import AddDiscretePurchase from '../components/Add/AddDiscretePurchase'



class PurchasePage extends Component {
  render() {
    return (
    <div><h1>The Purchase Page</h1>
        <AddExpenses/>
        <AddPurchase/>
        <AddLott/>
        <AddPiece/>
        <AddDiscretePurchase/>
        

    </div>);
  }
}



export default PurchasePage;