import React from "react";
import Users from "./User";
import Candidates from "./Candidates";
import Sidebar from "../Sidebar";
import Category from "./Category";
import Party from "./Party";

const Tables = () => {
  return (
    <>
        <div className="flex h-screen bg-gray-100">
          <Sidebar/>

          <div className="flex flex-col flex-1 overflow-y-auto min-h-screen">
              <div className="p-4">
                <Users/>
                <Candidates/>
                <Category/>
                <Party/>
              </div>
          </div>
       </div>
    </>
  );
};

export default Tables;
