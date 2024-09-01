import React, { useEffect } from 'react'
import Card from '../../../globals/card/Card'
import { fetchAllCandidate } from '../../../store/candidateSlice';
import { useSelector } from 'react-redux';

const LevelLanding = () => {
  // const {  status } = useSelector((state) => state.candidate);
  // console.log(status)

  useEffect(()=>{
    fetchAllCandidate()
  },[])
  

  return (
    <>
     <div className='flex flex-wrap justify-center mt-5'>
      <h1 className='text-4xl font-bold text-center mb-6 text-gray-800'>Other candidate</h1>
       <div className="flex flex-wrap justify-center gap-24">
       {/* {candidate.length>0 && candidate.map((cd)=>{
            return(
              <Card key={cd.id} data={cd} />
            )
          })
          } */}
         <Card/>
       </div>
      </div>
    </>
  )
}

export default LevelLanding
