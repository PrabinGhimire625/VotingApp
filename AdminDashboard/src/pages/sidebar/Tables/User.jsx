import React, { useEffect, useState } from 'react'
import { deleteuser, fetchAllUser, setDeleteUserById } from '../../../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'

const Users = () => {
    const dispatch=useDispatch()
    const {users,status} =useSelector((state)=>state.data)
    console.log(users)
    console.log(status)
    const [searchUser, setSearchUser] = useState(""); // Initialize with an empty string

    useEffect(()=>{
       dispatch( fetchAllUser())
    },[])


    //"id" from the component's UI, (clicking the delete button) and not from the Redux state.
    // "user.id "is passed as "id" to handleDeleteUser on clicking to the delete button 
  const handleDeleteUser = (id) => {
    dispatch(deleteuser(id));
  };

  //implement the search functinality
  const filteUser = users.filter((user) =>
    user.username.toLowerCase().includes(searchUser.toLowerCase()) ||
    user.email.toLowerCase().includes(searchUser.toLowerCase())    ||
    user.dob.toLowerCase().includes(searchUser.toLowerCase())    ||
    user.citizenshipNumber.toLowerCase().includes(searchUser.toLowerCase())    
  );
  

  return (
    <>
    <section className="bg-gray-200 dark:bg-gray-900 p-3 sm:p-5">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <h1 className="text-3xl font-bold text-red-800 text-center my-4">User List</h1>
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">

                {/* search functionality for the User */}
                <div className="md:w-1/2">
                    <form className="flex items-center">
                        <label for="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input value={searchUser} onChange={(e) => setSearchUser(e.target.value)} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required=""/>
                        </div>
                    </form>
                </div> 
            </div>


            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">User name</th>
                            <th scope="col" className="px-4 py-3">email</th>
                            <th scope="col" className="px-4 py-3">dob</th>
                            <th scope="col" className="px-4 py-3">citizenshipNumber</th>
                            <th scope="col" className="px-4 py-3">action</th>
                            <th scope="col" className="px-4 py-3">action</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                    {
                        filteUser && filteUser.length > 0 ? (
                            filteUser.map((user) => {
                            return (
                                <tr key={user.id} className="border-b dark:border-gray-700">
                                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.username}</th>
                                <td className="px-4 py-3">{user.email}</td>
                                <td className="px-4 py-3">{user.dob}</td>
                                <td className="px-4 py-3">{user.citizenshipNumber}</td>
                              <button   onClick={() => handleDeleteUser(user.id)} >  <td className="px-4 py-3  text-red-600 underline">delete</td></button>
                                <td className="px-4 py-3 text-red-600 underline">edit</td>
                                
                                </tr>
                            );
                            })
                        ) : (
                            <tr>
                            <td colSpan="5" className="text-center py-4">No users found</td>
                            </tr>
                        )
                    }


                         

                    </tbody>
                </table>
            </div>
           
        </div>
    </div>
    </section>
    </>
  )
}

export default Users
