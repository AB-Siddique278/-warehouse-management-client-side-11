import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div className='container'>
             <div >
                 
                <div className='row my-5'>


                    <dir className='col-md-6 d-flex align-items-center'>
                        <div>
                            <h1 > Wellcome To our Fruits Basket</h1>
                            <h2>We sell all kinds of fruits </h2>
                            <p>
                            Supplying our customers with the freshest, highest quality fruit.
                            </p>
                        
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for. </p>
                            <button type="button" class="btn btn-primary btn-lg">Learn More</button>
                        </div>
                    </dir>


                    <div className='col-md-6 product'>
                        
                        <div className=''> 

                        <img src="https://img.freepik.com/free-photo/fresh-fruits-isolated-white-background_144627-10547.jpg?t=st=1651178379~exp=1651178979~hmac=82ee058a3f8ee2b20db2fc445b6ec2030d40c4488513ab169cb2fa346c07358d&w=996" alt="" />

                        </div>                       
                    </div>


                </div>

            </div>
            
        </div>
    );
};

export default Home;