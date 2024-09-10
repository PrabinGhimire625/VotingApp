import React, { useEffect, useState } from 'react';
import { addCandidate, fetchAllCategory, fetchAllParty } from '../../store/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../../globals/enumStatus/Status';
import { useNavigate } from 'react-router-dom';

const AddCandidate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, party, category } = useSelector((state) => state.data);

    const [candidateData, setCandidateData] = useState({
        candidateName: '',
        candidateAddress: '',
        candidateDOB: '',
        candidateMobileNo: '',
        candidateDescription: '',
        candidateEmail: '',
        imageUrl: null,
        userId:'',
        partyId: '',
        categoryId: ''
    });
    

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setCandidateData({
            ...candidateData,
            [name]: name === 'imageUrl' ? files[0] : value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addCandidate(candidateData));
        if (status === STATUS.SUCCESS) {
            alert('Successfully added the candidate');
            navigate('/tables');
        } else {
            alert('Failed to add the candidate!');
        }
    };

    // Fetch all categories and parties when the component mounts
    useEffect(() => {
        dispatch(fetchAllParty());
        dispatch(fetchAllCategory());
    }, [dispatch]);

    console.log(candidateData)

    return (
        <>
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
                        <input onChange={handleChange} type="date" id="candidateDOB" name="candidateDOB" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="candidateMobileNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                        <input onChange={handleChange} type="tel" id="candidateMobileNo" name="candidateMobileNo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="candidateDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Candidate Description</label>
                        <textarea onChange={handleChange} id="candidateDescription" name="candidateDescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brief description" required />
                    </div>
                    <div>
                        <label htmlFor="candidateEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input onChange={handleChange} type="email" id="candidateEmail" name="candidateEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@example.com" required />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Candidate Image</label>
                    <input onChange={handleChange} type="file" id="imageUrl" name="imageUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" accept="image/*" required />
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
        </>
    );
};

export default AddCandidate;
