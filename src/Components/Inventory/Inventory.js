import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {

        const url = `http://localhost:5000/service${serviceId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setService(data))

    }, [])

    return (
        <div>
            <h1>This is Inventory: {service.name} </h1>
            
            <div class="card mb-3 w-50 mx-auto">
                <img src={service.picture} alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{service.name}</h5>
                        <p class="card-text">{service.detail}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
           








        </div>
    );
};

export default Inventory;