import Customlink from "../Link/Customelink";
import './Header.css'

const Header = () => {
    // const [user] = useAuthState(auth)
    // const handleSignOut = () =>{
    //     signOut(auth);
    // }
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Fruits Basket</a>
                   
                    <div className="" id="navbarNavAltMarkup">
                        <div className="navbar-nav all-nav">
                        <Customlink to="/">Home</Customlink>
                        <Customlink to="/servicedetail">Service</Customlink>

                        <Customlink to="/blog">Blogs</Customlink>
                        <Customlink to="/about">About</Customlink>
                        
                        {/* { 
                            user?
                            <button onClick={handleSignOut} className="btn btn-warning bt">Sign out</button>
                            :
                             <Customlink to="/login">Login</Customlink> 
                        } */}
                        
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;