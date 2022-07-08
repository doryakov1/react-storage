import React from 'react'
import { useState } from 'react'
import './SignUp.css'
export default function SignUp(props) {
  const [workerNumber, setWorkerNumber] = useState('');
  const [userName, setUserName] = useState('')
  const [forkliftTruck, setForkliftTruck] = useState('no')
  const [workerNumberAlert, setWorkerNumberAlert] = useState('')
  const [userNameAlert, setUserNameAlert] = useState('')
  const checkValidtionAndaddWorker = () => {
    const isUserExisting = (worker) => worker.workerNumber == workerNumber;
    let foundIdx = props.workers.findIndex(isUserExisting)
    if (digits_only(workerNumber) == false || workerNumber.length != 5) {
      setWorkerNumberAlert(<span>the number must be with 5 digits.</span>)
    } else if (userName.length < 4 || !/^[a-zA-Z\s]+$/.test(userName)) {
      setWorkerNumberAlert('')
      setUserNameAlert(<span>the name must contain minimum 4 characters.</span>)
    }else if (foundIdx != -1){
      setUserNameAlert('')
      setWorkerNumberAlert(<span>the worker number is already exiting.</span>)
    }else {
      props.addWorker(workerNumber, userName, forkliftTruck, 0)
      setUserNameAlert('')
      setWorkerNumberAlert('')

    }
  }

  const digits_only = string => [...string].every(c => '0123456789'.includes(c));

  return (
    <div className='sign-up'>
      <h1>Sign up</h1>
      <div>
        <label htmlFor="workerNumber">NO.</label>
        <input onChange={(e) => setWorkerNumber(e.target.value)} type="text" name='workerNumber' />
      </div>
      {workerNumberAlert}
      <div>
        <label htmlFor="userName">fullName</label>
        <input onChange={(e) => setUserName(e.target.value)} type="text" name='userName' />
      </div>
      {userNameAlert}
      <div>
        <input onChange={(e) => setForkliftTruck(e.target.value)} type="radio" id='forklift-input-yes' name='forkliftTruckInput' value={false} />
        <label htmlFor="forklift-input-yes">Yes</label>
        <input onChange={(e) => setForkliftTruck(e.target.value)} type="radio" id='forklift-input-no' name='forkliftTruckInput' value={true} />
        <label htmlFor="forklift-input-no">No</label>
      </div>
      <button onClick={checkValidtionAndaddWorker}>Create</button>
    </div>
  )
}
