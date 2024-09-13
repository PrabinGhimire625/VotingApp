import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../../globals/enumStatus/Status";
import { fetchSingleParty,updateParty } from "../../../store/dataSlice";
import Sidebar from "../../sidebar/Sidebar";
import { Link, useParams } from "react-router-dom";

const UpdateParty = () => { 
  const {id}=useParams()
  console.log(id)
  const { status, singleParty } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  
  const [partyData, setPartyData] = useState({
    partyName: "",
    estd: "",
    image: null
  });

  // Handle change
  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setPartyData({
      ...partyData,
      [name]: name === 'image' ? files[0] : value
    });
  };
  
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateParty(partyData, id))
      .then(() => {
        if (status === STATUS.SUCCESS) {
          alert("Successfully updated the party");
        } else {
          alert("Failed to update party");
        }
      });
  };

  // Fetch party data on mount
  useEffect(() => {
    if (id) {
      dispatch(fetchSingleParty(id));
    }
  }, [id, dispatch]);

  // poila ko data auxa ani teslai edit garana milxa
  useEffect(() => {
    if (singleParty) {
      setPartyData({
        partyName: singleParty.partyName || "",
        estd: singleParty.estd || "",
      });
    }
  }, [singleParty]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto min-h-screen">
        <div className="p-4">
          <div className="bg-white rounded-lg shadow relative m-10">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Update Party</h3>

              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
              {/* when click to the cross button then navigate to home pages */}
              <Link to='/'> 
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                   <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                </Link>
              </button>
              
            </div>

            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="partyName" className="text-sm font-medium text-gray-900 block mb-2">Party Name</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="partyName"
                      id="partyName"
                      value={partyData.partyName}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="estd" className="text-sm font-medium text-gray-900 block mb-2">Established Date</label>
                    <input
                      type="date"
                      onChange={handleChange}
                      name="estd"
                      id="estd"
                      value={partyData.estd}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="image" className="text-sm font-medium text-gray-900 block mb-2">Image</label>
                    <input
                      type="file"
                      onChange={handleChange}
                      name="image"
                      id="image"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    />
                  </div>
                </div>
                
                <div className="p-6 rounded-b">
                  <button
                    type="submit"
                    className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Update Party
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateParty;
