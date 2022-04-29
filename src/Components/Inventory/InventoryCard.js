import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InventoryCard = ({inventor}) => {
    const {name, _id, picture, detail, price, }= inventor;
    
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5>price:$ {price}</h5>
                        <p className="card-text">{detail}</p>




                        <Link to="/updateInventory">


                            <Button variant="primary">Update Inventory</Button>

                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default InventoryCard;