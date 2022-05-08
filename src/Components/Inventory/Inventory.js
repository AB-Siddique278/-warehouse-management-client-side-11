import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {

        const url = `https://serene-reaches-38236.herokuapp.com/service${serviceId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setService(data))

    }, [])


    const handelUpdate = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;

        const items = { quantity };

        const url = `https://serene-reaches-38236.herokuapp.com/service${serviceId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Delivery Update successfully!!...And Relode');
                event.target.reset();
            })
    }

    const handelDelevery = event => {
        event.preventDefault();
        const quantity = event.target.quantity;

        const newQuantity = parseInt(quantity)-1;
        //  const myQuantaty = quantity-1;
        const items = {newQuantity};

        const url = `https://serene-reaches-38236.herokuapp.com/service${serviceId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Delivery successful..!! and Relode for Updates');
                event.target.reset();
            })
    }


    return (
        <div>
           
            <div class="card mb-3 w-25 mx-auto my-3" >
                <img src={service.picture} alt="" />
                <div class="card-body">
                    <h5 class="card-title">Name : {service.name}</h5>
                    <h6 class="card-title">Price :$ {service.price} / kg</h6>
                    <h6 class="card-text">Quantity: {service.quantity} kg</h6>
                    <h6 class="card-title">Supplier Name : {service.sname}</h6>
                    <p class="card-text">Details: {service.detail}</p>


                </div>
            </div>



            <div className="d-flex justify-content-center">
                <form onSubmit={handelUpdate} >


                    <input className='input' type="number" name='quantity' placeholder='Update Quantity' required />
                    <input className='quantitybutton' type="submit" value="update Items" />
                </form>
            </div>


            <br />

            <div className='d-flex justify-content-center mb-4'>
                <form onSubmit={handelDelevery}>
                    <input className='deleverybutton'  type="submit" value="Delevery" />
                </form>
            </div>

        </div>
    );
};

export default Inventory;