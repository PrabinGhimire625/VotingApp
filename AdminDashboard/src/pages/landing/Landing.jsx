import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Users from '../sidebar/Tables/User';

const Landing = () => {
  return (
   <>
       <div className="flex h-screen bg-gray-100">
          <Sidebar/>

          <div className="flex flex-col flex-1 overflow-y-auto min-h-screen">
              <div className="p-4">
                 <h1>This is the home pages!</h1>
              </div>
          </div>
       </div>
  

       
      
     
  
   </>
  );
};

export default Landing;
