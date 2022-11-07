import React from 'react'
import './profile.scss'
import avt from '../../assets/logo-01-01.png'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="avt">
            <img src={avt} alt="" />
        </div>
        <div className="main-profile">
            <p className="name">Chu Minh Hoàng</p>
            <div className="title">
                
            </div>
        </div>
    </div>
  )
}

export default Profile