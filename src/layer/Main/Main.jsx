import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";


const Main = () => {
    const navigation=useNavigation()
    return (
        <div className=" px-8">
            
            <Navbar/>
            {
                navigation.state==="Loading" && "Loading....."
            }
            <Outlet/>

        </div>
    );
};

export default Main;