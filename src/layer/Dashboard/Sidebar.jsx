
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='col-span-2 bg-green-600 h-[calc(100vh-25px)] p-5 rounded-lg'>
            <nav>
                <ul className='flex gap-3  flex-col h-full mt-24'>
                    <div>
                        <h2 className='text-yellow-500 text-center text-xl font-bold'>Admin Part</h2>
                    </div>
                <div className="divider divider-info"></div>
                    {/* <NavLink className=" text-white font-bold " to="/Dashboard">Admin Dashboard</NavLink> */}
                    <NavLink className=" text-white font-bold " to="/Dashboard/AddContent">Add Content</NavLink>
                    <NavLink className=" text-white font-bold " to="/Dashboard/ContentList">Content List</NavLink>
                    <div className="divider divider-info mt-24"></div>
                    <NavLink className=" text-white absolute bottom-24" to="/">Back Home</NavLink>

                </ul>
            </nav>

        </div>
    );
};

export default Sidebar;