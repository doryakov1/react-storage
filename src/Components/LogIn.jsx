import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './LogIn.css'

export default function LogIn(props) {
  const nav = useNavigate()
  const [workerNumber, setWorkerNumber] = useState('');
  const [flag, setFlag] = useState(false)
  const getdata = () => {
    if (flag == false) {
      return (
        <div>
          <h1>Log in</h1>
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
          <div>Forklift truck license: {props.worker.forkliftTruck ? 'yes' : 'no'}</div>
          <h3>List of products</h3>
          {props.products.map((product) => {
            return (
              <div className='products'>
                <span>NO. {product.productNumber}</span>
                <span>Name: {product.fullName}</span>
                <span>Need forklift truck: {product.forkliftTruck ? 'yes' : 'no'}</span>
                <button>Update</button>
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
     if(workerNumber == 99999 ){
      nav('/react-storage/manager')
    }
    else if (foundIdx == -1) {
      alert('the worker isnt exiting.')
    } else{
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
