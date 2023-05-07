import React from 'react';

import { Outlet } from "react-router-dom";
import Menubar from '../../components/Menubar/Menubar';

const ChefsLayout = () => {
    return (
        <div>
            <div>
                <Menubar></Menubar>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default ChefsLayout;