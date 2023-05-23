import {createHashRouter} from "react-router-dom";

import React from "react";
import {Home} from '../page/home'

const router = createHashRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: '/:pathMatch(.*)*',
        element: <Home/>,
    },
]);
export default router