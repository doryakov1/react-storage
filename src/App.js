import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import Manager from './Components/Manager';
import LogIn from './Components/LogIn';
import { useState } from 'react';
function App() {
  const [workers , setWorkers] = useState([])
  const [products , setProducts] = useState([{
    productNumber: '11122',
    fullName: 'Green box',
    forkliftTruck: false,
    isInPlace: false
  },{
    productNumber: '22554',
    fullName: 'Green box',
    forkliftTruck: false,
    isInPlace: false
  },{
    productNumber: '66698',
    fullName: 'Blue box',
    forkliftTruck: true,
    isInPlace: false
  },{
    productNumber: '78544',
    fullName: 'Red box',
    forkliftTruck: false,
    isInPlace: false
  },{
    productNumber: '69875',
    fullName: 'Red box',
    forkliftTruck: false,
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
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/react-storage/' element={<HomePage />} />
          <Route path='/react-storage/signup' element={<SignUp workers={workers} addWorker={addWorker}/>} />
          <Route path='/react-storage/login' element={<LogIn worker={workers[workerIdx]} workers={workers} products={products} setWorkerIdx={setWorkerIdx}/>} />
          <Route path='/react-storage/manager' element={<Manager workers={workers}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
