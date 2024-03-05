import {
    createBrowserRouter, RouterProvider
} from "react-router-dom"
import Mani from "../Layout/Mani"
import Home from "../pages/Home/Home"

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Mani></Mani>,
        children:[
            {
                path: '/',
                element:<Home/>
            }
        ]
    }
])