import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'

export const Navigation = () => {
  return (
    <nav className ="nav">
        <ul className="navigation_list">
          <li className='navigation_item'>
            <Link to='/'>Главная</Link>
          </li>
          <li className='navigation_item'>
            <Link to='/register'>Регистрация</Link>
          </li>
          <li className='navigation_item'>
            <Link to='/login'>Вход</Link>
          </li>
        </ul>
    </nav>
  )
}
