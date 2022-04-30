import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const ManageInventory = () => {

    const [services, setServices]= useServices();

    const handleDelete = id =>{

        const proceed = window.confirm("Are you deleat ?");
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                const remaining =services.filter(serviceItem => serviceItem._id !== id);
                setServices(remaining);
            })

        }



    }
 

    return (
        <div>
            <h1>Hi iam in inventory</h1>


                {
                    services.map(serviceItem => <div key={serviceItem._id}>
                        <h5> {serviceItem.name} <button onClick={() => handleDelete(serviceItem._id)}>Remove</button> </h5>






                    </div>)
                }







            <Link to="/additems"> Add Items </Link>
        </div>
    );
};

export default ManageInventory;