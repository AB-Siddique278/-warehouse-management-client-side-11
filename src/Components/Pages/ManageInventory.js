import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import AllItems from './AllItems';
import './ManageInventory.css'

const ManageInventory = () => {

    const [services, setServices] = useServices();

    const handleDelete = id => {

        const proceed = window.confirm("Are you deleat ?");
        if (proceed) {
            const url = `https://serene-reaches-38236.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(serviceItem => serviceItem._id !== id);
                    setServices(remaining);
                })

        }



    }


    return (
        <div>
            <h1 className='text-center'>All of Items</h1>
            <div className=' d-flex justify-content-center'>

                <button className='btn btn-primary addlink'  >

                    <Link to="/additems"> Add Items </Link>
                </button>

            </div>



            <div className='container'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center my-5'>
                    {
                        services.map(serviceItem => (
                            <AllItems

                                serviceItem={serviceItem}


                            >


                            </AllItems>))

                    }

                </div>
            </div>



        </div>
    );
};

export default ManageInventory;

