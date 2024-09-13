import React, { useEffect, useState } from 'react'
import { deleteCategory, fetchAllCategory } from '../../../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Category = () => {
    const dispatch=useDispatch()
    const {category,status} =useSelector((state)=>state.data)
    console.log(status)
    const [searchCategory, setSearchCategory] = useState(""); // Initialize with an empty string

    useEffect(()=>{
       dispatch( fetchAllCategory())
    },[])


    //"id" from the component's UI, (clicking the delete button) and not from the Redux state.
    // "user.id "is passed as "id" to handleDeleteUser on clicking to the delete button 
    const handleDeleteCategory=(id)=>{
        dispatch(deleteCategory(id))
    }

     //implement the search functinality
  const filterCategory = category.filter((cate) =>
    cate.categoryName.toLowerCase().includes(searchCategory.toLowerCase())
  );

  return (
    <>
    <section className="bg-gray-200 dark:bg-gray-900 p-3 sm:p-5">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <h1 className="text-3xl font-bold text-red-800 text-center my-4">Category List</h1>
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
               
               
                <div className="md:w-1/2">
                    <form className="flex items-center">
                        <label for="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input value={searchCategory}  onChange={(e) => setSearchCategory(e.target.value)} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required=""/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">Category name</th>
                            
                            <th scope="col" className="px-4 py-3">action</th>
                            <th scope="col" className="px-4 py-3">action</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                    {
                        filterCategory && filterCategory.length > 0 ? (
                            filterCategory.map((cat) => {
                            return (
                                <tr key={cat.id} className="border-b dark:border-gray-700">
                                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{cat.categoryName}</th>
                              
                              <button   onClick={() => handleDeleteCategory(cat.id)} >  <td className="px-4 py-3  text-red-600 underline">delete</td></button>
                              <td className="px-4 py-3 text-red-600 underline"> 
                                <Link to={`/updateCategory/${cat.id}`}>edit</Link>
                              </td>
                                
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

export default Category
