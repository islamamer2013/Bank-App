
import { useState } from 'react';
import TransferCSS from './Transfer.module.css';

const Transfer = ({ handleClose, show, children , transactionData }) => {
  const showHideClassName = show ? "d-block" : "d-none";
const [transfer, setTransfer] = useState({
  from:'',	
  to :'',	
  Amount:0
})
function getTransferData(e) {
   let myTransfer ={...transfer };
   myTransfer[e.target.name] = e.target.value;
 setTransfer(myTransfer);
 console.log(transfer);
}
function submitTransfer (e) {
  e.preventDefault();
  transactionData.push(transfer)
  
 console.log(transactionData);
}

  return (
    <div className={showHideClassName}>
      <section className={TransferCSS.modalmain}>
        {children}
        <h3>Transfer</h3>
        <form onSubmit={submitTransfer}>
            <label htmlFor="from">From : </label> 
            <input onChange={getTransferData} type="text" name='from' /> <br/><br/>
            <label htmlFor="to">To : </label> 
            <input onChange={getTransferData} type="text" name='to' /> <br/><br/>
            <label htmlFor="Amount">Amount : </label> 
            <input onChange={getTransferData} type="number" name='Amount' /> <br/><br/>
            <button type="submit" className='btn btn-danger'>Transfer</button>
        </form>
        <br/><br/>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};export default Transfer ;