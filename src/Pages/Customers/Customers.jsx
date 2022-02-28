import React, { Component } from "react";
import Modal from '../../Components/Modal/Modal'
import {Link} from 'react-router-dom'


class Customer extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      customersDate:[
        {	Name:"Mohamed",	mail :"mohamed@gmail.com",	Balance:"40"},
        {	Name:"Ahmed",	mail :"ahmed@gmail.com",	Balance:"60"},
        {	Name:"Samy",	mail :"samy@gmail.com",	Balance:"90"},
        {	Name:"Amin",	mail :"amin@gmail.com",	Balance:"140"},
        {	Name:"Hassan",	mail :"hassan@gmail.com",	Balance:"80"} 
    
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
        <div className="d-flex  row text-center p-5 align-content justify-content-center align-self-center">
          <div>
                  <h2>Name: Islam</h2>
                  <h4>Net Bank Balance: $<span id="myAccountBalance">50</span></h4>

                  <button onClick={this.showModal} className="btn btn-success m-5" data-toggle="modal" data-target="">Add New Customer</button>
                  <Modal  customersDate = {this.state.customersDate} show={this.state.show} handleClose={this.hideModal}>
                 </Modal>

              </div>
            
            <div className="container">
              <div className="table-responsive">
          <table className="table table-striped table-hover">
          <thead>
                    <tr className="table-danger">
                        {/* <th scope="col">Id</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Bank Balance(in $)</th>
                    </tr>
                </thead>
          <tbody>
          
         { this.state.customersDate.map(( listValue, index ) => {
          return (
            <tr key={index}>
              {/* <td>{listValue.id}</td> */}
              <td>{listValue.Name}</td>
              <td>{listValue.mail}</td>
              <td>{listValue.Balance}</td>
            </tr>
          );
        })}

          </tbody>
          </table>
          </div>
          </div>     </div>   </div>
      </div>
    );
  }
}

export default Customer