import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../../pages/Home";


const Main = () => {
    //const navigation=useNavigation()
    return (
        <div className=" px-8">
            
            <Navbar/>
           
            {/* {
                navigation.state==="Loading" && "Loading....."
            } */}
         <div>
         <Outlet/>
         </div>

        </div>
    );
};

export default Main;