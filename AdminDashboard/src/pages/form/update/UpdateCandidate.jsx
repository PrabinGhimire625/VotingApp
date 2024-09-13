import React, { useEffect, useState } from 'react'
import Sidebar from '../../sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchAllCandidate, fetchAllCategory, fetchAllParty, fetchSingleCandidate, updateCandidate } from '../../../store/dataSlice';
import { STATUS } from '../../../globals/enumStatus/Status';

const UpdateCandidate = () => {
    const {id}=useParams()
    console.log(id)
    const dispatch=useDispatch();
    const {status,category, party, singleCandidate}=useSelector((state)=>state.data)
    console.log(status)
    console.log(singleCandidate)
    console.log(category)
    console.log(category)
    console.log(party)

    const [candidateData, setCandidateData] =useState({
        candidateName:"",
        candidateName: '',
        candidateAddress: '',
        candidateDOB: '',
        candidateMobileNo: '',
        candidateDescription: '',
        candidateEmail: '',
        image: null,
        partyId: '',
        categoryId: ''
    })


    //handle change
    const handleChange=(e)=>{
        const {name,value,files}=e.target
        setCandidateData({
            ...candidateData,
            [name]: name==='image' ? files[0]: value
        })
    }

    //handle submit
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(updateCandidate(candidateData, id))
      .then(() => {
        if (status === STATUS.SUCCESS) {
          alert("Successfully updated the candidate");
        } else {
          alert("Failed to update candidate");
        }
      });

    }

    useEffect(()=>{
        dispatch(fetchAllCategory())
        dispatch(fetchAllParty())
    },[dispatch])

//dispatch the singleCandiate
    useEffect(()=>{
        if(id){
            dispatch(fetchSingleCandidate(id))
        }
    },[id,dispatch])

console.log(candidateData)

  return (
   <>
  <div className='flex h-screen bg-gray-100'>
    <Sidebar/>
    <div className='flex flex-col flex-1 overflow-y-auto min-h-screen'>
    <h1 className="text-center text-2xl text-red-700 font-bold">Add candidates</h1> 
        <div className='p-4'>
        <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="candidateName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Candidate Name</label>
                        <input onChange={handleChange} type="text" id="candidateName" name="candidateName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter candidate name" required />
                    </div>
                    <div>
                        <label htmlFor="candidateAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Candidate Address</label>
                        <input onChange={handleChange} type="text" id="candidateAddress" name="candidateAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter address" required />
                    </div>
                    <div>
                        <label htmlFor="candidateDOB" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Candidate DOB</label>
                        <input onChange={handleChange}  type="date" id="candidateDOB" name="candidateDOB" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="candidateMobileNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                        <input onChange={handleChange} type="tel" id="candidateMobileNo" name="candidateMobileNo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="candidateDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Candidate Description</label>
                        <textarea onChange={handleChange}  id="candidateDescription" name="candidateDescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brief description" required />
                    </div>
                    <div>
                        <label htmlFor="candidateEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input onChange={handleChange} type="email" id="candidateEmail" name="candidateEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@example.com" required />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Candidate Image</label>
                    <input onChange={handleChange} type="file" id="image" name="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" accept="image/*" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="categoryId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>
                    <select onChange={handleChange} id="categoryId" name="categoryId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value="" disabled selected>Select Category</option>
                        {category.length > 0 && category.map((cate) => (
                            <option key={cate.id} value={cate.id}>{cate.categoryName}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="partyId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Party</label>
                    <select onChange={handleChange} id="partyId" name="partyId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value="" disabled selected>Select Party</option>
                        {party.length > 0 && party.map((part) => (
                            <option key={part.id} value={part.id}>{part.partyName}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

        </div>
    </div>
  </div>
        
   </>
  )
}

export default UpdateCandidate
