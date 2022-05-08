import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Customlink from "../Link/Customelink";
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"> <h3>Fruits Basket</h3></a>

                    <div className="" id="navbarNavAltMarkup">
                        <div className="navbar-nav all-nav">
                            <Customlink to="/">Home</Customlink>
                           

                            <Customlink to="/blog">Blogs</Customlink>
                                                    


                            {
                                user && <>
                                    <Customlink to="/manageInventory">Manage Items</Customlink>
                                    <Customlink to="/additems">Add Items</Customlink>

                                    <Customlink to="/myitems">My Items</Customlink>
                                </>

                            }

                            {
                                user ?
                                    <button onClick={handleSignOut} className="btn btn-primary bt">Sign out</button>
                                    :
                                    <Customlink to="/login">Login</Customlink>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;