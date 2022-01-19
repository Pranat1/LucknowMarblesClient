import React, { Component } from 'react';
import AddFirm from '../components/Add/AddFirm';
import AddPlace from '../components/Add/AddPlace';




class AttributesPage extends Component {
  render() {
    return (
    <div><h1>The Attributes Page</h1>
        <AddFirm/>
        <AddPlace/>
    </div>);
  }
}



export default AttributesPage;