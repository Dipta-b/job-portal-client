import React from 'react'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');


        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Job added successfully");
                    navigate('/myPostedJobs')
                }
            })
    }
    return (
        <div>
            <h2 className="text-3xl">Add a Job</h2>
            <form onSubmit={handleJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="job title" className="input input-bordered" required />
                </div>
                {/* job location  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input name='location' type="text" placeholder="job location" className="input input-bordered" required />
                </div>
                {/* job type  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">JOb type</span>
                    </label>
                    <select defaultValue="Pick a Job" className="select select-ghost w-full max-w-xs">
                        <option disabled >Job type</option>
                        <option>Full time</option>
                        <option>Intern</option>
                        <option>Part time</option>
                    </select>
                </div>
                {/* job Category  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job category</span>
                    </label>
                    <select defaultValue="Job Category" className="select select-ghost w-full max-w-xs">
                        <option disabled >Job Category</option>
                        <option>Engineering</option>
                        <option>teaching</option>
                        <option>MArketing</option>
                        <option>Finance</option>
                    </select>
                </div>

                {/* salary range */}
                <p className='mt-4'>Salary Range</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className="form-control">

                        <input name='min' type="text" placeholder="Min Salary" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input name='max' type="text" placeholder="MAx Salary" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <select name='currency ' className="select select-ghost w-full max-w-xs">
                            <option disabled >Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                            <option>Euro</option>
                        </select>
                    </div>
                </div>

                {/* job description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>

                    <textarea name='description' className="textarea textarea-bordered" placeholder="Job description"></textarea>
                </div>
                {/* Company Name  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input name='company' type="text" placeholder="company name" className="input input-bordered" required />
                </div>
                {/* job requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job requirements</span>
                    </label>

                    <textarea name='requirements' className="textarea textarea-bordered" placeholder="Each Requirements in a new line"></textarea>
                </div>
                {/* responsibilities*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job responsibilities</span>
                    </label>

                    <textarea name='responsibilities' className="textarea textarea-bordered" placeholder="Each responsibilities in a new line"></textarea>
                </div>
                {/* HR Name  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input name='hr_name' type="text" placeholder="hr name" className="input input-bordered" required />
                </div>
                {/* HR Email  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input defaultValue={user?.email} name='hr_email' type="email" placeholder="hr email" className="input input-bordered" required />
                </div>
                {/*Application Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application Deadline </span>
                    </label>
                    <input defaultValue={user?.email} name='applicationDeadline' type="date" placeholder="Application Deadline" className="input input-bordered" required />
                </div>
                {/*Company logo url */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company logo url</span>
                    </label>
                    <input name='company_logo' type="text" placeholder="company logo url" className="input input-bordered" required />
                </div>

                {/* Submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddJob