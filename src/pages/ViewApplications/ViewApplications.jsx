import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ViewApplications = () => {
    const applications = useLoaderData();

    return (
        <div>
            ViewApplications{applications.length}

        </div>
    )
}

export default ViewApplications