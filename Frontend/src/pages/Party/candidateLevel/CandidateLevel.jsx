import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCandidateByCategory } from '../../../store/candidateSlice';
import Sidebar from '../../candidate/categorySildeBar/Sidebar';
import LevelSidebar from '../sidebar/LevelSidebar';
import Card from '../../candidate/candidateCard/Card';

const CandidateLevel = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchItem] = useState(""); // search through the search bar
    const { category } = useSelector((state) => state.category);
    const { data } = useSelector((state) => state.candidate);
    console.log(category);
    console.log(data)

    useEffect(() => {
        if (category?.id) {
            dispatch(fetchCandidateByCategory(category?.id));
        }
    }, [dispatch, category?.id]);




    return (
        <div className='flex flex-wrap justify-center mt-5'>
            <div className="flex flex-wrap justify-center gap-16">
             {
                data && data.length > 0 ? (
                    data.map((candidate) => (
                        <Card key={candidate.id} data={candidate} />
                    ))
                ) : (
                    <p>No Level available for the party.</p>
                )
              }
        </div>
        </div>
    );
};

export default CandidateLevel;
