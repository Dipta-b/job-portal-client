import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const JObDetail = () => {
    const { _id, title, company, deadline } = useLoaderData();
    return (
        <div className='border p-4 rounded-lg shadow-lg'>
            JObDetail for:{title}
            <p>Apply for:{company}</p>
            <p>Deadline :{deadline}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    )
}

export default JObDetail