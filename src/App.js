import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import Admin from './Components/Admin';
import LogIn from './Components/LogIn';
import { useState } from 'react';
function App() {
  const [workers , setWorkers] = useState([])
  const [products , setProducts] = useState([{
    productNumber: '11122',
    fullName: 'Green box',
    forkliftTruck: 'no',
    isInPlace: false
  },{
    productNumber: '22554',
    fullName: 'Green box',
    forkliftTruck: 'no',
    isInPlace: false
  },{
    productNumber: '66698',
    fullName: 'Blue box',
    forkliftTruck: 'yes',
    isInPlace: false
  },{
    productNumber: '78544',
    fullName: 'Red box',
    forkliftTruck: 'no',
    isInPlace: false
  },{
    productNumber: '69875',
    fullName: 'Red box',
    forkliftTruck: 'no',
    isInPlace: false
  }])
  const [workerIdx , setWorkerIdx] = useState('')
  const addWorker = (workerNumber , fullName , forkliftTruck , storageVisits)=>{
    let worker = {
      workerNumber: workerNumber,
      fullName: fullName,
      forkliftTruck: forkliftTruck,
      storageVisits: storageVisits
    }
    setWorkers([...workers,worker])
    console.log(workers)
  }
  const addProduct = (productNumber , fullName , forkliftTruck , isInPlace)=>{
    let product = {
      productNumber: productNumber,
      fullName: fullName,
      forkliftTruck: forkliftTruck,
      isInPlace: isInPlace
    }
    setProducts([...products,product])
    console.log(products)
  }
  // const deleteExpense = (idx ,workerIdx)=>{
  //   workers[workerIdx].expenses.splice(idx,1)
  //   setWorkers([...workers])
  // }

//   const checkValidtion = () => {
//     const isUserExisting = (customer) => customer.fullName == userName && customer.password == password;
//     let foundIdx = props.customers.findIndex(isUserExisting)
//     if (userName == 'ADMIN' && password == 'ADMIN') {
//         nav('/react-bank/admin')
//     } else if (foundIdx != -1){
//         props.setCustomerIdx(foundIdx)
//         nav(`/react-bank/${userName}`)
//     }else{
//         alert('User didnt found')
//     }
// }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/react-storage/' element={<HomePage />} />
          <Route path='/react-storage/signup' element={<SignUp workers={workers} addWorker={addWorker}/>} />
          <Route path='/react-storage/login' element={<LogIn worker={workers[workerIdx]} workers={workers} products={products} setWorkerIdx={setWorkerIdx}/>} />
          <Route path='/react-storage/admin' element={<Admin workers={workers}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
