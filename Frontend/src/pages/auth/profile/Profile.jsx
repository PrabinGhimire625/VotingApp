import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../../store/authSlice';

const Profile = () => {

    const dispatch = useDispatch();
    const { profile, status } = useSelector((state) => state.auth);
    console.log(status)
    console.log(profile)
    
    useEffect(() => {
        dispatch(userProfile()); // Fetch user profile data when component mounts
    }, [dispatch]);

  return (
   <>
   <div class="h-screen dark:bg-gray-700 bg-gray-200 pt-5">
    <div class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div class="border-b px-4 pb-6">
            <div class="text-center my-4">
                <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                    src="https://randomuser.me/api/portraits/women/21.jpg" alt=""/>
                <div class="py-2">
                    <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">{profile.username}</h3>
                    <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                        {profile.email}
                    </div>
                </div>
            </div>
            <div class="flex gap-2 px-2">
                <button
                    class="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                    Follow
                </button>
                <button
                    class="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                    Message
                </button>
            </div>
        </div>
       
    </div>

</div>

   </>
  )
}

export default Profile
