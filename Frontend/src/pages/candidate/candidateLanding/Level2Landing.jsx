import React, { useEffect } from 'react';
import Card from '../candidateCard/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCandidate } from '../../../store/candidateSlice';

const Level2Landing = () => {
  const { data } = useSelector((state) => state.candidate);

  // Filter candidates according to the categoryName "classLevel"
  const classLevelCandidates = data.filter(
    candidate => candidate.Category.categoryName === "classLevel"
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCandidate());
  }, [dispatch]);

  return (
   <>
    <h1 className='text-4xl font-bold text-center pt-16 mb-6 text-gray-800'>Class Candidates</h1>
    <div className='flex flex-wrap justify-center mt-5'> 
      <div className="flex flex-wrap justify-center gap-24">
        {classLevelCandidates.length > 0 && classLevelCandidates.map((candidate) => (
          <Card key={candidate.id} data={candidate} />
        ))}
      </div>
    </div>
   </>
  );
};

export default Level2Landing;
