import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCandidateByParty } from "../../../store/candidateSlice";
import Card from '../../candidate/candidateCard/Card';

const Singleparty = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [searchTerm, setSearchItem] = useState(""); // search through the search bar
    const { data, status } = useSelector((state) => state.candidate);

    useEffect(() => {
        dispatch(fetchCandidateByParty(id));
    }, [dispatch, id]);

    // Searching the candidate inside that party
    const filteredCandidates = data.filter((candidate) =>
        candidate.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.candidateAddress.toLowerCase().includes(searchTerm.toLowerCase())

    );

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="hidden md:flex flex-col w-64 bg-gray-800">
                <div className="flex items-center justify-center h-16 bg-gray-900">
                    <span className="text-white font-bold uppercase">Sidebar</span>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 bg-gray-800">
                        <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Dashboard
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Messages
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Settings
                        </a>
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
                        
                        {/* search candidate */}
                        <input value={searchTerm} onChange={(e) => setSearchItem(e.target.value)} className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
                    
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


                {/* Display all candidates of the party */}
               
                <div className='flex flex-wrap justify-center mt-5'>
                <div className="flex flex-wrap justify-center gap-24">      
                    {filteredCandidates && filteredCandidates.length > 0 ? (
                        filteredCandidates.map((candidate) => (
                            <Card key={candidate.id} data={candidate} />
                        ))
                    ) : (
                        <p>No candidates available for this party.</p>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singleparty;
