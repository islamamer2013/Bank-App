

import React, { Component } from "react";
import Transfer from '../../Components/Transfer/Transfer'
import {Link} from 'react-router-dom'


class Transaction extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      transactionData:[
        {	from:"Mohamed",	to :"Sayed",	Amount:"40"},
        {	from:"Ahmed",	to :"Mosaa",	Amount:"60"},
        {	from:"Samy",	to :"Lotfy",	Amount:"90"},
        {	from:"Amin",	to :"Kareem",	Amount:"140"},
        {	from:"Hassan",	to :"Amr",	Amount:"80"} 
    
    ]
    };




    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (

        <div className="d-flex vh-100 p-5">
          <div className="container text-center p-5">
        <div className="d-flex  row text-center p-5 align-content-center justify-content-center align-self-center">
         
          <div>
                  <h2>Transaction History</h2>

                  <button onClick={this.showModal} className="btn btn-danger m-5" data-toggle="modal" data-target="">Send Money</button>
                  <Transfer  transactionData = {this.state.transactionData} show={this.state.show} handleClose={this.hideModal}>
                 </Transfer>


              </div>
            
              <div className="table-responsive">
          <table className="table table-striped table-hover">
          <thead>
                    <tr className="table-danger">
                        {/* <th scope="col">Id</th> */}
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Amount(in $)</th>
                    </tr>
                </thead>
          <tbody>
          
         { this.state.transactionData.map(( listValue, index ) => {
          return (
            <tr key={index}>
              {/* <td>{listValue.id}</td> */}
              <td>{listValue.from}</td>
              <td>{listValue.to}</td>
              <td>{listValue.Amount}</td>
            </tr>
          );
        })}

          </tbody>
          </table>
          </div>
          </div>
          </div>     </div>  
     
    );
  }
}

export default Transaction