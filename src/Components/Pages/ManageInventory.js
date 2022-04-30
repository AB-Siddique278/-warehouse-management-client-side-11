import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    return (
        <div>
            <h1>Hi iam in inventory</h1>

            <Link to="/additems"> Add Items </Link>
        </div>
    );
};

export default ManageInventory;