import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate,} from 'react-router-dom';

const InventoryCard = ({inventor}) => {
    const {name, _id, picture, detail, price, quantity, sname }= inventor;
    const navigate = useNavigate();

    const navigateToServiceDetail = _id =>{
        navigate(`/inventory/${_id}`);
    }
    
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        
                        <h6>price:$ {price} / kg</h6>
                        <h6>Quantity: {quantity} kg</h6>
                        <h6>Supplier Name: {sname}</h6>
                        <p className="card-text">Details: {detail}</p>

                        <Button variant="primary" onClick={() => navigateToServiceDetail(_id)} >Update Inventory</Button>

                    </div>

                </div>

            </div>


            
        </div>
    );
};

export default InventoryCard;