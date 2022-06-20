import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
export default function HomePage() {
    return (
        <div className='home-page'>
            <h1>Logistics Management</h1>
            <div>
            <Link className='link' to='/react-storage/signup'><button>Sign up</button></Link>
            <Link className='link' to='/react-storage/login'><button>Log in</button></Link>
            </div>
        </div>
    )
}
