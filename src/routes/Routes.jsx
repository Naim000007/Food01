import {
    createBrowserRouter, RouterProvider
} from "react-router-dom"
import Mani from "../Layout/Mani"
import Home from "../pages/Home/Home"
import Menu from "../pages/Menu/Menu"

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Mani></Mani>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            {
                path: 'menu',
                element: <Menu/>
            }
        ]
    }
])