import React from 'react'
import './Header.css'
import Header_nav from './Header_nav'

const Header = () => {
  return (
    <div className='header_back'>
      <Header_nav />
      <div className='header_info'>
        <h1>Премиальное <br /> обслуживание <br /> вашего автомобиля</h1>
        <div className='btn_header'>
          <button className='entry'><p>Запись в сервис</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M10 16.5L14 12.5L10 8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button className='consulting'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M9.85001 15H14.15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 11.75H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.85001 8.5H14.15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 11.791C21 16.33 16.952 19.973 12 19.973C11.359 19.973 10.735 19.91 10.131 19.794" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.599 18.326C4.42 16.836 3 14.474 3 11.791" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.59901 18.326C6.59801 19.18 6.60001 20.332 6.60001 21.541" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 11.791C3 7.25199 7.048 3.60999 12 3.60999C16.952 3.60999 21 7.25299 21 11.792" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.13 19.79L6.60001 21.54" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Консультация</p></button>
        </div>
      </div>
    </div>
  )
}

export default Header