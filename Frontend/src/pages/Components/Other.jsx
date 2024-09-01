import React from 'react'
import Home from '../home/Home'
import { Link } from 'react-router-dom'

const Other = () => {
  return (
    <>
       <h1>Welcome to vote for the Other candidate!</h1>
    <div className="flex h-screen bg-gray-100">
<div className="hidden md:flex flex-col w-64 bg-gray-800">
    <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white font-bold uppercase">Sidebar</span>
    </div>
    <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-gray-800">
          <Link>
            <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    Dashboard
                </a>
          </Link>

            <Link to='/schoolLevel'>
                <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    SchoolLevel
                </a>
            </Link>

           <Link to='/teamLevel'>
                <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16v-2a4 4 0 00-8 0v2M12 14v6m0 0v2m0-2h6m-6 0H6" />
                        </svg>
                        TeamLevel
                </a>
           </Link>

           <Link to='/classLevel'>
                <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16m-7 4h7" />
                        </svg>
                        ClassLevel
                </a>
           </Link>

          <Link to='/other'>
                <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6m4-6h6m-3-3v6m-6-3H6m-3 3v6" />
                        </svg>
                        Other
                </a>
          </Link>
        </nav>
    </div>
</div>

<div className="flex flex-col flex-1 overflow-y-auto">
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
        <div className="flex items-center px-4">
            <button className="text-gray-500 focus:outline-none focus:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search"/>
        </div>
        <div className="flex items-center pr-4">

            <button
                className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
                </svg>
            </button>
        </div>
    </div>

    {/* display the candidate data */}
    <div className="p-4">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
    <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image"/>
    <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
        Card title
        </h3>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
        Go somewhere
        </a>
    </div>
        </div>
    </div>

    
</div>

</div>



    </>
  )
}

export default Other
