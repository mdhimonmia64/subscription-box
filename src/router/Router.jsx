import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../assets/Pages/Home/Home";
import Banner from "../component/Banner/Banner";
import About from "../assets/Pages/About/About";
import Profile from "../assets/Pages/Profile/Profile";
import SignIn from "../assets/Pages/SignIn/SignIn";
import SignUp from "../assets/Pages/SignUp/SignUp";
import CardDetails from "../assets/Pages/CardDetails/CardDetails";
import PrivetRoute from "../assets/Pages/CardDetails/PrivetRoute/PrivetRoute";
import ErrorPages from "../assets/Pages/Error/ErrorPages";
import Loading from "../assets/Pages/Loading/Loading";
import CoffeeSubscriptions from "../assets/Pages/CoffeeSubscriptions/CoffeeSubscriptions";
import ContactUs from "../assets/Pages/Contact/ContactUs";
import CoffeeJob from "../assets/Pages/Job/CoffeeJob";
import ContactMe from "../assets/Pages/ContactMe/ContactMe";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                path:"/",
                Component:Home,
                loader:()=>fetch("/data.json"),
                hydrateFallbackElement:<Loading></Loading>
            },
            {
                path:"/banner",
                Component:Banner
            },
            {
                path:"/contactMe",
                Component:ContactMe
            },
            {
                path:"/about",
                // Component:About,
                element:<PrivetRoute>
                    <About></About>
                </PrivetRoute>
            },
            {
                path:"/cardDetails/:id",
                // Component:CardDetails,
                element:<PrivetRoute>
                    <CardDetails></CardDetails>
                </PrivetRoute>,
                loader:()=>fetch("/data.json"),
                hydrateFallbackElement:<Loading></Loading>
            },
            {
                path:"/signin",
                Component:SignIn
            },
            {
                path:"/signup",
                Component:SignUp
            },
            {
                path:"/profile",
                Component:Profile
            },
            {
                path:"/coffeeSubscriptions",
                element:<PrivetRoute>
                    <CoffeeSubscriptions></CoffeeSubscriptions>
                </PrivetRoute>,
            },
            {
                path:"/contact",
                Component:ContactUs
            },
            {
                path:"/jobs",
                Component:CoffeeJob
            }
        ]
    },
    {
        path:"/*",
        Component:ErrorPages
    }
])
