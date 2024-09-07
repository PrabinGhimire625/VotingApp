import {Link} from "react-router-dom"
import Users from "./Tables/User";

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [isOpenTable, setIsOpenTable] = useState(false);

  // const toggleDropdown = () => setIsOpen(!isOpen);
  // const toggleDropdownTable = () => setIsOpenTable(!isOpenTable);

  return (
    // <div className="bg-white min-h-screen p-4">
    //   <div className="sticky top-0 bg-white text-blue-800 px-4 py-2 z-10 w-full">
    //     <div className="flex items-center justify-between">
    //       <h1 className="font-bold text-xl text-blue-900">
    //         Admin<span className="text-orange-600">Panel</span>
    //       </h1>
    //     </div>
    //   </div>

    //   <div className="mt-8">
    //     <div className="bg-white rounded-lg shadow-md p-4">
    //       <a href="#" className="flex items-center text-gray-600 hover:text-black mb-4">
    //         <HomeIcon className="h-5 w-5 mr-2" />
    //         Home
    //       </a>
    //       <a href="#" className="flex items-center text-gray-600 hover:text-black mb-4">
    //         <CogIcon className="h-5 w-5 mr-2" />
    //         Settings
    //       </a>
    //       <a href="#" className="flex items-center text-gray-600 hover:text-black mb-4">
    //         <UserCircleIcon className="h-5 w-5 mr-2" />
    //         Profile
    //       </a>
    //       <a href="#" className="flex items-center text-gray-600 hover:text-black mb-4">
    //         <LogoutIcon className="h-5 w-5 mr-2" />
    //         Log out
    //       </a>
    //     </div>

    //     <div className="bg-white rounded-lg shadow-md p-4 mt-6">
    //         {/* table */}
    //         <Link to='/tables'>
    //             <div className="relative">
    //                 <a href="#" className="flex items-center text-gray-600 hover:text-black mb-4" > 
    //                     <TableIcon className="h-5 w-5 mr-2" />
    //                         Tables
    //                 </a>
    //             </div>
    //         </Link>

    //         {/* form */}
    //       <div className="relative">
    //             <a href="#" onClick={toggleDropdown} className="flex items-center text-gray-600 hover:text-black mb-4" >
    //             <DocumentIcon className="h-5 w-5 mr-2" />
    //                 Form
    //             <ChevronDownIcon className="h-4 w-4 ml-auto" />
    //             </a>
    //             {isOpen && (
    //             <div className="mt-2 space-y-2 ml-6">
    //                 <a href="#" className="block text-gray-600 hover:text-black"> Login </a>
    //                 <a href="#" className="block text-gray-600 hover:text-black"> Register</a>
    //             </div>
    //             )}
    //       </div>

    //         {/* pages */}
    //       <div className="relative">
    //             <a href="#" className="flex items-center text-gray-600 hover:text-black mb-4" > 
    //             <LogoutIcon className="h-5 w-5 mr-2" />
    //                 Pages
    //             <ChevronDownIcon className="h-4 w-4 ml-auto" />
    //             </a>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-gray-800 min-h-screen">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase">Sidebar</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Dashboard
              </a>

              {/* tables */}
              <Link to="/tables" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5h2M4 10v11a1 1 0 001 1h14a1 1 0 001-1V10M4 10l8-8 8 8M10 21v-6h4v6" />
                  </svg>
                  Tables
              </Link>

              <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Settings
              </a>
            </nav>
          </div>
        </div>

  </div>
    

    
    
  );
};

export default Sidebar;
