import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import AddCandidate from './AddCandidate'

const SidebarForm = () => {
  return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto min-h-screen">
            <div className="p-4">
                <AddCandidate/>
            </div>
        </div>
     </div>
  )
}

export default SidebarForm
