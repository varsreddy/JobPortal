// import { setAllJobs } from '@/redux/jobSlice'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const useGetAllJobs = () => {
//     const dispatch = useDispatch();
//     const {searchedQuery} = useSelector(store=>store.job);
//     useEffect(()=>{
//         const fetchAllJobs = async () => {
//             try{
//                 const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,{withCredentials:true});
//                 if(res.data.success){
//                     dispatch(setAllJobs(res.data.jobs));
//                 }
//             }catch(err){
//                 console.log(err);
//             }
//         }
//         fetchAllJobs();
//     },[searchedQuery]);
 
// }

// export default useGetAllJobs;








import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetJobs = () => {
  const dispatch = useDispatch();
  const { searchedQuery } = useSelector(store => store.job);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let url = `${JOB_API_END_POINT}/get`;

        // If searchedQuery exists and is not empty, add keyword param
        if (searchedQuery && searchedQuery.trim() !== '') {
          url += `?keyword=${encodeURIComponent(searchedQuery.trim())}`;
        }

        const res = await axios.get(url, { withCredentials: true });

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        } else {
          dispatch(setAllJobs([])); // Clear if no jobs found
        }
      } catch (err) {
        console.log("Error fetching jobs:", err);
        dispatch(setAllJobs([])); // Clear jobs on error
      }
    };

    fetchJobs();
  }, [searchedQuery]);

};

export default useGetJobs;
