import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../css/Layout.css'

function Layout() {
  return (
    <div className='container'>
        <header 
            style={{display: 'flex', gap: '1rem'}}
        >
            <NavLink to="/albums" className={({ isActive }) => isActive ? 'link-active' : 'link'} end={true}>Albums</NavLink>
            <NavLink to="/users" className={({ isActive }) => isActive ? 'link-active' : 'link'}>Users</NavLink>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout