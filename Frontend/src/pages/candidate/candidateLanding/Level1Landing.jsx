import React, { useEffect } from 'react';
import Card from '../candidateCard/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCandidate } from '../../../store/candidateSlice';

const Level1Landing = () => {
  const dispatch=useDispatch()
  const { data } = useSelector((state) => state.candidate);
  console.log(data)

  // Filter candidates according to the categoryName "schoolLevel"
  const schoolLevelCandidates = data.filter(
    candidate => candidate.Category.categoryName === "schoolLevel"
  );

  useEffect(() => {
    dispatch(fetchAllCandidate());
  }, [dispatch]);

  return (
    <>
    <h1 className='text-4xl font-bold text-center mb-6 text-gray-800'>School Candidates</h1>
    <div className='flex flex-wrap justify-center mt-5'>
      <div className="flex flex-wrap justify-center gap-24">
        {schoolLevelCandidates.length > 0 && schoolLevelCandidates.map((candidate) => (
          <Card key={candidate.id} data={candidate} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Level1Landing;
