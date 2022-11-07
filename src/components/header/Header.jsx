import React from 'react'
import './header.scss'
import logo from '../../assets/logo-01-01.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="heading">
          <h1>CÂU LẠC BỘ TIN HỌC HIT - HAUI</h1>
          <p>Trường Đại Học Công Nghiệp Hà Nội</p>
        </div>
        <img src={logo} alt="" />
    </div>
  )
}

export default Header