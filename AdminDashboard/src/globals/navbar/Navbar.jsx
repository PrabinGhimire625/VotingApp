import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setToken } from '../../store/authSlice';

const Navbar = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {token,status} = useSelector((state) => state.auth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const localStorageToken = localStorage.getItem('token');
        console.log('localStorageToken:', localStorageToken);
        console.log('Redux token:', token);
        
        // Synchronize localStorage with Redux
        if (localStorageToken) {
            dispatch(setToken(localStorageToken));
        }
        
        // Set login state based on token presence
        setIsLoggedIn(!!localStorageToken || !!token);
    }, [token, dispatch]);



    const handleLogout=()=>{
        localStorage.removeItem('token')
        setIsLoggedIn(false)
        navigate("/login")
    }


  return (
    <>
        <header className='shadow-md font-[sans-serif] tracking-wide relative z-50'>
    <section className='md:flex lg:items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[80px] max-lg:min-h-[60px]'>
        <a href="javascript:void(0)" className="max-sm:w-full max-sm:mb-3 shrink-0">
            <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-[160px]' />
        </a>

        <div className='flex flex-wrap w-full items-center'>
            <input type='text' placeholder='Search something...' 
                className='xl:w-96 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 focus:bg-transparent px-6 rounded h-11 outline-[#333] text-sm transition-all' />

            <div className="ml-auto max-lg:mt-4">
                <ul className='flex items-center'>
                    

                    {!isLoggedIn ? (
                        <Link to='/login'>
                          <button className="max-sm:hidden flex items-center justify-center text-[15px] max-lg:py-3 px-4 font-medium text-white bg-blue-700 cursor-pointer rounded-md h-8">
                              Login
                          </button>
                      </Link>
                    ):(
                        <button onClick={handleLogout} className="max-sm:hidden flex items-center justify-center text-[15px] max-lg:py-3 px-4 font-medium text-white bg-red-700 cursor-pointer rounded-md h-8">
                            Logout
                        </button>
                    )
                    }
                 
                    <li className='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] cursor-pointer'>
                    <div className="relative ml-3">
                                        <div>
                                            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                <span className="absolute -inset-1.5"></span>
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                            </button>
                                        </div>
                                </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</header>

      
    </>
  )
}

export default Navbar
