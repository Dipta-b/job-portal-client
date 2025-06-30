import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import SignIn from "../pages/signIN/SignIn";
import JObDetail from "../pages/jobDetail/JObDetail";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/myApplications/MyApplications";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'jobs/:id',
                element: <PrivateRoute><JObDetail></JObDetail></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path: 'myApplications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'signin',
                element: <SignIn></SignIn>
            },
        ]
    },
]);

export default router;
