import React, { useEffect, useState } from 'react'
import HotJobCart from './HotJobCart';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>


            {
                jobs.map(job => <HotJobCart job={job} key={job._id}></HotJobCart>)
            }
        </div>
    )
}

export default HotJobs