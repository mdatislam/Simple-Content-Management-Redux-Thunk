import { useDispatch, } from "react-redux";
import { addToHistory, removeFromHistory } from "../redux/actionCreator/actionCreator";
import { useNavigate } from 'react-router-dom';



const ContentCard = ({ content,}) => {
    const { name,  recipe,category,rating } = content 
        const dispatch = useDispatch()
    const navigate = useNavigate()
   
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                {/* <figure>

                    <p className="flex absolute right-4 top-2 bg-slate-700 p-1 rounded-lg text-white">
                        <TbCoinTaka className="w-6 h-6 text-white-400" />
                        {price}</p>
                    {(location.pathname.includes("History")) && <p className="absolute left-4 top-2 bg-slate-700 p-2 rounded-lg text-white">{quantity}</p>}

                    <img src={image} alt={name} />

                </figure> */}
                <div className="card-body">
                    <h2 className="card-title flex justify-between">
                    <p>{name}</p>
                    {(location.pathname.includes("History")) && <p className="absolute right-4 top-2 bg-slate-700 p-2 rounded-lg text-white"> rating: {rating}</p>}
                    {(location.pathname.includes("History")===false) &&<p className="uppercase"> type:<span className=" text-pink-600" >{category}</span></p>}
                    </h2>
                    {/* <p>{price}</p> */}
                    <p>{recipe}</p>
                {rating && <p className="absolute left-4 bottom-6 bg-pink-600 p-2 rounded-lg text-white"> rating: {rating}</p> }
                    {location.pathname.includes("/History") === false && <div className="card-actions justify-end">
                        <button className="btn btn-primary"
                            onClick={() => {
                                dispatch(addToHistory(content))
                                navigate(`/Home/SingleCard/${content._id}`)
                            }}

                        >Details</button>
                    </div>}

                    {location.pathname.includes("/History") && <div className="card-actions justify-end">
                        <button className="btn btn-ghost text-red-500"
                            onClick={() => dispatch(removeFromHistory(content))}
                        >Delete</button>
                    </div>}
                </div>
            </div>

        </div>
    );
};

export default ContentCard;