import { useDispatch, useSelector } from "react-redux";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";
import { useEffect } from "react";
import { fetchContent } from "../../redux/thunk/fetchContent";
import Swal from "sweetalert2";
import { deletedItem } from "../../redux/thunk/deleteItem";
import { useNavigate } from "react-router-dom";




const ContentList = () => {
    const dispatch= useDispatch()
    useEffect(()=>{
       dispatch( fetchContent())
    },[])
    const contents = useSelector(state => state.contents.contents)
    const navigate=useNavigate()

    const handleDelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deletedItem(id))
              Swal.fire({
                title: "Deleted!",
                text: "Your content has been deleted.",
                icon: "success"
              });
            }
          });
    }

    const handleUpdate=id=>{
        Swal.fire({
            title: "Do you want to update?",
            
            showCancelButton: true,
            confirmButtonText: "yes",
            
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                navigate(`/Dashboard/UpdateContent/${id}`)

              /* Swal.fire("Saved!", "", "success"); */
            } 
          });
    }

    return (
        <div>
            <div className="overflow-x-auto w-3/4 mx-auto">
                <table className="table border-2 border-slate-400 rounded-t-lg ">
                    {/* head */}
                    <thead className="border-b-4 border-slate-400 bg-blue-500 text-white text-lg ">
                        <tr >
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contents
                            .sort((a,b)=>b._id-a._id)
                            .map(content =>


                                <tr className="divide-y divide-slate-400 "
                                    content={content} key={content._id} >
                                    <th className="text-pink-400 border-b-2 border-slate-400">
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={content.image} alt={content.name} />
                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        <div className="text-lg">{content.name}</div>
                                    </td>
                                    <td>
                                        <div className="text-lg">{content.category}</div>
                                    </td>
                                    <td> <div className="text-lg">{content.price}</div></td>
                                    <td>
                                        <div className="text-lg flex gap-x-1">
                                            <button onClick={()=> handleUpdate(content._id)}> 
                                            <MdOutlineEdit className="w-6 h-6 text-green-500" />
                                            </button>
                                            <button> 
                                            <RxDividerVertical className="w-6 h-6 text-green-500" />
                                            </button>
                                            
                                            <button onClick={()=> handleDelete(content._id)}> 
                                            <RiDeleteBin6Line className="w-6 h-6 text-red-500"  />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ContentList;