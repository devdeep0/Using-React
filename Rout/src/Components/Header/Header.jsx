import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'


function Header() {
  const select = useSelector(state => state.cart)
  return (
    <header className='bg-lime-100' style={{height:'90px'}}>
        <div className='h-full p-4 pr-6 flex items-center justify-between'>
            <h1 className='text-3xl'>Dummy Store</h1>
            <div className='flex gap-10 p-4'>
              <ul className='flex gap-8'>
                <li>
                  <NavLink
                  to="Home"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                  ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0` }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to="/Shop"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                  ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0` }
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to="/Store"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                  ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0` }
                  >
                    Store
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to="/CU"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                  ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0` }
                  >
                    Contact Us
                  </NavLink>
                </li>
                
                
              </ul>
            </div>
            <div className='flex gap-7'>
              <ul className='flex gap-7'>
                <li>
                  <NavLink
                  to='/Cart'
                  >
                    <img className='h-7' src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" /> 
                  </NavLink>
                </li>
                <div className='absolute top-3 right-40'>{select.length}</div>
                <div>Login</div>
                <div>SignUp</div>
              </ul>  
            </div>
        </div>
    </header>
  )
}

export default Header