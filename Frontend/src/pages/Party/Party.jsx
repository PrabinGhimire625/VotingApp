import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParty } from '../../store/partySlice';
import { Link } from 'react-router-dom';

const Party = () => {
  const dispatch = useDispatch();
  const { party } = useSelector((state) => state.party);
  const [searchParty, setSearchParty] = useState(""); // Initialize with an empty string
  console.log(party);

  useEffect(() => {
    dispatch(fetchParty());
  }, [dispatch]);

  // Filter parties based on the search term
  const filterParty = party.filter((par) =>
    par.partyName.toLowerCase().includes(searchParty.toLowerCase()) ||
    par.estd.toLowerCase().includes(searchParty.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col items-center h-64">
        <div className="w-full px-4">
          <div className="flex flex-col items-center relative">
            <div className="w-full">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <div className="flex flex-auto flex-wrap"></div>
                <input
                  value={searchParty}
                  onChange={(e) => setSearchParty(e.target.value)}
                  placeholder="Search by party name"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>

            {/* Party list */}
            {filterParty && filterParty.length > 0 ? (
              <div className="absolute shadow bg-white top-full z-40 w-full left-0 rounded max-h-select overflow-y-auto mt-1">
                <div className="flex flex-col w-full">
                  {filterParty.map((partyItem) => (
                    <Link to={`/singleParty/${partyItem.id}`} key={partyItem.id}>
                      <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-red-400">
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
            ) : (
              <div>No parties found</div> // Placeholder if no results found
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Party;
