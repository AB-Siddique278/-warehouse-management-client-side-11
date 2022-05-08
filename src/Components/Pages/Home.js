
import React, { useEffect, useState } from 'react';
import InventoryCard from '../Inventory/InventoryCard';
import "./Home.css"
import { BeakerIcon, ChipIcon, CubeIcon, GlobeIcon, MenuIcon, StarIcon } from '@heroicons/react/solid'
import { Carousel } from 'react-bootstrap';



import Slider from "react-slick";

const Home = () => {
    const [inventory, setInventory] = useState([])
    useEffect(() => {

        fetch('https://serene-reaches-38236.herokuapp.com/service')
            .then(response => response.json())
            .then(data => setInventory(data))

    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div >
            <div className='container'>

                <div className='row my-5'>


                    <dir className='col-md-6 d-flex align-items-center'>
                        <div>
                            <h1 > Wellcome To our Fruits Basket</h1>
                            <h2>We sell all kinds of fruits </h2>
                            <p>
                                Supplying our customers with the freshest, highest quality fruit.
                            </p>

                            <p>Processing is essential to ensure safety when canning fruits. Fruits, being acidic foods, can be processed safely in a boiling-water bath. However, some people prefer to pressure-process fruits.. </p>
                            <button type="button" class="btn btn-primary btn-lg">Learn More</button>
                        </div>
                    </dir>


                    <div className='col-md-6 product'>

                        <div className=''>

                            <img className='img-fluid' src="https://img.freepik.com/free-photo/fresh-fruits-isolated-white-background_144627-10547.jpg?t=st=1651178379~exp=1651178979~hmac=82ee058a3f8ee2b20db2fc445b6ec2030d40c4488513ab169cb2fa346c07358d&w=996" alt="" />

                        </div>
                    </div>


                </div>

            </div>

            <section>
                <h2 className='text-center my-5'> Our Productes </h2>

                <div className='container'>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center my-5'>

                        {
                            inventory.map(inventor => (
                                <InventoryCard
                                    key={inventor._id}
                                    inventor={inventor}
                                ></InventoryCard>



                            ))
                        }


                    </div>
                </div>


            </section>


            <section className='container mb-5'>

                <h1 className='text-center'>Other Services </h1>


                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="h-100">

                            <div class="card-body">
                                <ChipIcon className="icon" />
                                <h5 class="card-title">Delivery</h5>
                                <p class="card-text">Save a trip to the grocery store and order fresh fruits online with Edible Arrangements®. Choose a box with a delightful assortment of fresh, ripe fruits, featuring our freshest picks of the day. .</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class=" h-100">

                            <div class="card-body">
                                <CubeIcon className="icon" />
                                <h5 class="card-title">Transportation</h5>
                                <p class="card-text">Transportation Services means travel assistance given to an individual with escort service, if necessary, to and from community facilities and resources as part .</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100">

                            <div class="card-body">
                                <GlobeIcon className="icon" />
                                <h5 class="card-title">Our branch</h5>
                                <p class="card-text">Find Fruits branches stock images in HD and millions of other royalty-free ... Tree branch with leaves and ripe orange fruits of peaches or mandarines..</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100">

                            <div class="card-body">
                                <MenuIcon className="icon" />
                                <h5 class="card-title">Fresh food</h5>
                                <p class="card-text">Best Online Grocery Shop in Bangladesh. We Deliver to your door whatever you want in the local store. Fresh Groceries, Meals, and more, for online delivery.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


            <div className='mb-5'>
                <h3 className='text-center mb-5'> Our customer Review</h3>
                <Slider {...settings}>
                    <div>
                        <div class=" text-center ">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className='wpx-100 img-round mgb-20 mx-auto' alt="" />
                            <h5>Nabeel Nasrullah</h5>
                            <p className='w-50 mx-auto'>Vast variety of fresh fruit and veg in a very clean shop. Ample parking space which is surely a plus when going shopping! Keep up the good work and service .</p>

                            <div>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                    <div class=" text-center">
                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className='wpx-100 img-round mgb-20 mx-auto' alt="" />
                            <h5>Al Mahamud </h5>
                            <p className='w-50 mx-auto'>You order your products to be delivered in the morning and they send it at night .,I think everyone should quit buying from Fruits Baskets then they will learn their lesson. Or everyone should keep returning the order if it is not in time .</p>

                            <div>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                    <div class=" text-center">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className='wpx-100 img-round mgb-20 mx-auto' alt="" />
                            <h5> Jamal Khan</h5>
                            <p className='w-50 mx-auto'>They are fresh and delicious. Great service. My ratings on mangoes are based on their fruit. So sweet, so good. I have ordered 20 cases of mangoes within the.</p>

                            <div>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                <StarIcon className='rating'></StarIcon>
                                
                            </div>
                        </div>
                    </div>
                </Slider>
                

            </div>


        </div>
    );
};

export default Home;