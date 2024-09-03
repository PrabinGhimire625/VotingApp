import React, { useEffect } from 'react'
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';

import { useDispatch } from 'react-redux';
import { fetchAllCandidate } from '../../../store/candidateSlice'; 

const CandidateLanding = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(fetchAllCandidate());
    // }, [dispatch]);

  return (
    <>
     <Level1 />
     <Level2 />
     <Level3 />
   
    </>
  )
}

export default CandidateLanding
