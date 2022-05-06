import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const MyItemsCards = ({ myitem }) => {
    const { name, _id, picture, detail, price, } = myitem;

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


            <div className="col">
                <div className="card h-100">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5>price:$ {price}</h5>
                        <p className="card-text">{detail}</p>







                        <button className='btn btn-danger' onClick={() => handleDelete(myitem._id)}>Remove</button>



                    </div>

                </div>

            </div>









        </div>
    );
};

export default MyItemsCards;