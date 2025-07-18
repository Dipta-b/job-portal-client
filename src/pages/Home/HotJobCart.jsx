import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const HotJobCart = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className='flex items-center gap-4 m-2'>
                <figure>
                    <img className='w-12'
                        src={company_logo} />
                </figure>
                <div>
                    <h4 className='text-2xl'>{company}</h4>
                    <p className='flex gap-1 items-center'><IoLocationOutline />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary" >NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map(skill => <p className='
                            border rounded-md text-center px-2 hover:text-blue-700 hover:bg-gray-400
                            '>{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <p>Salary:{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>

                    <Link to={`/jobs/${_id}`}>  <button className="btn btn-primary">Apply Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HotJobCart