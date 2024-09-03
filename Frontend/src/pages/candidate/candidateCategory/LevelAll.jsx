import React from 'react'
import Home from '../../home/Home'
import { Link } from 'react-router-dom'

import Sidebar from '../categorySildeBar/Sidebar'
import Level1Landing from '../candidateLanding/Level1Landing'
import Level2Landing from '../candidateLanding/Level2Landing'
import Level3Landing from '../candidateLanding/Level3Landing'

const LevelAll = () => {
  return (
    <>
       <h1>Welcome to vote for the school/Level1 candidate!</h1>
       <div className="flex h-screen bg-gray-100">
    <Sidebar/>

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
        <Level1Landing/>
        <Level2Landing/>
        <Level3Landing/>
            
        </div>
    </div>
</div>
    </>
  )
}

export default LevelAll
