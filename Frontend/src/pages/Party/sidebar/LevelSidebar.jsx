import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCandidateByCategory } from '../../../store/candidateSlice';
import { fetchCategory } from '../../../store/categorySlice';

const LevelSidebar = () => {
    const dispatch = useDispatch();
    const { category } = useSelector((state) => state.category);
    console.log(category)

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    // Handle category selection to fetch candidates by category
    const handleCategoryClick = (categoryId) => {
        dispatch(fetchCandidateByCategory(categoryId));
    };

    return (
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <span className="text-white font-bold uppercase">Candidate level</span>
            </div>

            <div className="flex flex-col flex-1 overflow-y-auto">
                <nav className="flex-1 px-2 py-4 bg-gray-800">
                    {category && category.length > 0 ? (
                        category.map((categ) => (
                            <a key={categ.id} onClick={() => handleCategoryClick(categ.id)} href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                {categ?.categoryName}
                            </a>
                        ))
                    ) : (
                        <p>No categories available</p>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default LevelSidebar;
