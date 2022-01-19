import React, { Component } from "react";
import AddSale from "../components/Add/AddSale";
import AddRefund from "../components/Add/AddRefund";
import AddDiscreteSale from "../components/Add/AddDiscreteSale";
import AddSaleCutEntry from "../components/Add/AddSaleCutEntry";

class SalePage extends Component {
  render() {
    return (
      <div>
        <h1>The Product Page</h1>
        <AddSaleCutEntry />
        <AddSale />
        <AddDiscreteSale />
        <AddRefund />
      </div>
    );
  }
}

export default SalePage;
