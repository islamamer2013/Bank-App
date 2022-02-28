
import { useState } from 'react';
import ModalCSS from './Modal.module.css';

const Modal = ({ handleClose, show, children , customersDate }) => {
  const showHideClassName = show ? "d-block" : "d-none";
const [user, setUser] = useState({
  Name:'',	
  mail :'',	
  Balance:0
})
function getuserdata(e) {
   let myUser ={...user };
   myUser[e.target.name] = e.target.value;
 setUser(myUser);
 console.log(user);
}
function submitRegister (e) {
  e.preventDefault();
  customersDate.push(user)
  
 console.log(customersDate);
}

  return (
    <div className={showHideClassName}>
      <section className={ModalCSS.modalmain}>
        {children}
        <h3>User Data</h3>
        <form onSubmit={submitRegister}>
            <label htmlFor="Name">Name : </label> 
            <input onChange={getuserdata} type="text" name='Name' /> <br/><br/>
            <label htmlFor="mail">E-Mail : </label> 
            <input onChange={getuserdata} type="text" name='mail' /> <br/><br/>
            <label htmlFor="balance">Balance : </label> 
            <input onChange={getuserdata} type="number" name='Balance' /> <br/><br/>
            <button type="submit" className='btn btn-info'>Add</button>
        </form>
        <br/><br/>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};export default Modal ;