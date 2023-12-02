import { NavLink } from "react-router-dom";


const ActiveLink = ({to,Children}) => {
    return (
        <div>
            <NavLink to={to} 
            className={({isActive})=>isActive ? "active":""}
            >
                {Children}
            </NavLink>
            
        </div>
    );
};

export default ActiveLink;