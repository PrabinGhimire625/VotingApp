import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParty } from '../../store/partySlice';
import { Link } from 'react-router-dom';

const Party = () => {
  const dispatch = useDispatch();
  const { party } = useSelector((state) => state.party);
  console.log(party);

  useEffect(() => {
    dispatch(fetchParty());
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col items-center h-64">
        <div className="w-full px-4">
          <div className="flex flex-col items-center relative">
            <div className="w-full">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <div className="flex flex-auto flex-wrap"></div>
                <input
                  placeholder="Search by party name"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
            
            {/* Dropdown content displayed directly below the search bar */}
            <div className="absolute shadow bg-white top-full z-40 w-full left-0 rounded max-h-select overflow-y-auto mt-1">
              <div className="flex flex-col w-full">
                {party && party.map((partyItem) => (
                    <Link to={`/singleParty/${partyItem.id}`}>
                     <div key={partyItem.id} className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-red-400">
                    <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                      <div className="w-6 flex flex-col items-center">
                        <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 rounded-full">
                        
                        <img
                          className="rounded-full"
                          alt="#"
                          src={`http://localhost:3000/${partyItem?.partyImageUrl}`}
                        />

                        </div>
                      </div>
                      <div className="w-full items-center flex">
                        <div className="mx-2 -mt-1">
                          {partyItem?.partyName}
                          <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                            Established on: {partyItem?.estd}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    </Link>

                 
                ))}


              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Party;
