import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCandidateByParty } from "../../../store/candidateSlice";
import Card from '../../candidate/candidateCard/Card';
import LevelSidebar from '../sidebar/LevelSidebar'; // Import LevelSidebar

const Singleparty = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [searchTerm, setSearchItem] = useState(""); // search through the search bar
    const { data } = useSelector((state) => state.candidate);
    
    useEffect(() => {
        dispatch(fetchCandidateByParty(id));
    }, [dispatch, id]);

    // Searching the candidate inside that party
    const filteredCandidates = data.filter((candidate) =>
        candidate.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.candidateAddress.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar Component */}
            <LevelSidebar /> {/* No need to pass props */}

            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                    <div className="flex items-center px-4">
                        <input value={searchTerm} onChange={(e) => setSearchItem(e.target.value)} className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
                    </div>
                </div>

                {/* Display all candidates of the party */}
                <div className='flex flex-wrap justify-center mt-5'>
                    <div className="flex flex-wrap justify-center gap-16">
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
