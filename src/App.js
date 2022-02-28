import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Customers from './Pages/Customers/Customers'
import NotFound from './Pages/NotFound/NotFound'
import Transaction from './Pages/Transaction/Transaction'
import Dashboard from './Pages/Dashboard/Dashboard'
import {  Routes,Route } from 'react-router-dom'
import About from './Pages/About/About'


// Home of Bank , Customers data , Transaction Hiostory 
// modal of transactions 
function App() {
  return (
    <>
<Navbar/> 
<Routes>
    <Route path='/' element = {<Home/>} /> 
    <Route path='/home' element = {<Home/>} /> 
    <Route path='/customers' element = {<Customers/>} /> 
    <Route path='/dashboard' element = {<Dashboard/>} /> 
    <Route path='/transaction' element = {<Transaction/>} /> 
    <Route path='/about' element = {<About/>} /> 


    <Route path='*' element = {<NotFound/>} />
    </Routes>

</>
  );
}

export default App;
{/* <div>
<div className='container'>
<Routes>
    <Route path='/' element = {<Home/>} /> 
    <Route path='/home' element = {<Home/>} /> 
    <Route path='/customers' element = {<Customers/>} /> 
    <Route path='*' element = {<NotFound/>} /> 

</Routes>
</div>

</div> */}