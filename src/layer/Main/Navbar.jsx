import { BiSort } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { sortHistoryContent } from "../../redux/actionCreator/actionCreator";


const Navbar = () => {
  const dispatch = useDispatch()
  const toggleAdmin = useSelector(state => state.contents.toggle)
  const admin = toggleAdmin
  return (
    <div className=" bg-indigo-400 rounded-full m-2 max-w-7xl mx-auto px-5'">
      <nav>
        <ul className="flex items-center justify-center py-3 ">
        <p className="font-bold text-white text-start ">AdminToggle:
        <button onClick={() => dispatch(sortHistoryContent())}><BiSort className="w-8 h-8 text-teal-700" /> </button>
      </p>
          <NavLink className=" text-white mr-10 font-bold text-xl" to="/Home">Home</NavLink>
          <NavLink className=" text-white mr-10 font-bold text-xl" to="/Home/History">History</NavLink>
          <NavLink className=" text-white mr-10 font-bold text-xl" to="/Home/About">About</NavLink>
          {admin && <NavLink className=" text-white mr-10 font-bold text-xl" to="/Dashboard">Dashboard</NavLink>}
          <NavLink className=" text-white mr-10 font-bold text-xl" to="/">Login</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;