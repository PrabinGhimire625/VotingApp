import React, { useEffect, useState } from 'react'
import {  deleteCandidate, fetchAllCandidate } from '../../../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Candidates = () => {
    const dispatch=useDispatch()
    const {candidates} =useSelector((state)=>state.data)
    console.log(candidates)
    const [searchCandidate,setSearchCandidate]=useState("");

    useEffect(()=>{
       dispatch( fetchAllCandidate())
    },[])

    //"id" from the component's UI, (clicking the delete button) and not from the Redux state.
    // "user.id "is passed as "id" to handleDeleteUser on clicking to the delete button 
    const handleDeleteCandidates=(id)=>{
        dispatch(deleteCandidate(id))
    }

    const filterCandidate=candidates.filter((candidate)=>
        candidate.candidateName.toLowerCase().includes(searchCandidate.toLowerCase()) ||
        candidate.candidateEmail.toLowerCase().includes(searchCandidate.toLowerCase()) ||
        candidate.candidateAddress.toLowerCase().includes(searchCandidate.toLowerCase())
    )

  return (
    <>
        <section className="bg-gray-200 dark:bg-gray-900 p-3 sm:p-5">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <h1 className="text-3xl font-bold text-red-800 text-center my-4">Candidate List</h1>
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
                            <input value={searchCandidate} onChange={(e)=>setSearchCandidate(e.target.value)} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required=""/>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button type="button" className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Add product
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">Candidate name</th>
                            <th scope="col" className="px-4 py-3">Email</th>
                            <th scope="col" className="px-4 py-3">Address</th>
                            <th scope="col" className="px-4 py-3">Vote count</th>
                            <th scope="col" className="px-4 py-3">action</th>
                            <th scope="col" className="px-4 py-3">action</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        filterCandidate && filterCandidate.length > 0 ? (
                            filterCandidate.map((candidate) => {
                            return (
                                <tr key={candidate.id} className="border-b dark:border-gray-700">
                                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{candidate.candidateName}</th>
                                <td className="px-4 py-3">{candidate.candidateEmail}</td>
                                <td className="px-4 py-3">{candidate.candidateAddress}</td>
                                <td className="px-4 py-3">{candidate.voteCount}</td>
                              <button   onClick={() => handleDeleteCandidates(candidate.id)} >  <td className="px-4 py-3  text-red-600 underline">delete</td></button>
                                <td className="px-4 py-3 text-red-600 underline">
                                    <Link to={`/updateCandidate/${candidate.id}`}>edit</Link>
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

export default Candidates
