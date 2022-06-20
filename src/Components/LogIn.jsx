import React, { useState } from 'react'
import './LogIn.css'

export default function LogIn(props) {
  const [workerNumber, setWorkerNumber] = useState('');
  const [flag, setFlag] = useState(false)
  const getdata = () => {
    if (flag == false) {
      return (
        <div>
          <h1>Sign up</h1>
          <div>
            <label htmlFor="workerNumber">NO.</label>
            <input onChange={(e) => setWorkerNumber(e.target.value)} type="text" name='workerNumber' />
          </div>
          <button onClick={checkValidtionAndNav}>Enter</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Wellcome {props.worker.fullName}</h1>
          <div>Details:</div>
          <div>Full Name: {props.worker.fullName}</div>
          <div>NO.: {props.worker.workerNumber}</div>
          <div>Forklift truck license: {props.worker.forkliftTruck}</div>
          <h1>List of products</h1>
          {props.products.map((product) => {
            return (
              <div>
                <span>NO. {product.productNumber}</span>
                <span>Name: {product.fullName}</span>
                <span>Need forklift truck: {product.forkliftTruck}</span>
              </div>
            )
          })}
        </div>
      )
    }
  }
  const checkValidtionAndNav = () => {
    const isUserExisting = (worker) => worker.workerNumber == workerNumber;
    let foundIdx = props.workers.findIndex(isUserExisting)
    if (foundIdx == -1) {
      alert('the worker isnt exiting.')
    } else {
      setFlag(true)
      props.setWorkerIdx(foundIdx)
    }
  }
  return (
    <div className='log-in'>
      {getdata()}
    </div>
  )
}
