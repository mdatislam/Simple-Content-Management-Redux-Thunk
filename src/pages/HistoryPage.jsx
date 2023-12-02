import { useDispatch, useSelector } from "react-redux";
import ContentCard from "../components/ContentCard";
import { BiSort } from "react-icons/bi";
import { sortHistoryContent } from "../redux/actionCreator/actionCreator";


const HistoryPage = () => {
    const historyContent= useSelector(state=> state.contents.history)
    const sortContent= useSelector(state=>state.contents.toggle)
    const dispatch= useDispatch()
    //const sortBy= sort((a,b)=>a.contentReadingTime-b.contentReadingTime)
    //console.log(location.pathname);
    return (
        <div>
            <div className="text-center my-5">
                <p>Sort By Quantity:
                    <button onClick={()=>dispatch(sortHistoryContent())}><BiSort className="w-8 h-8 text-teal-700" /> </button>
                     </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 w-max mx-auto px-2">
            {
              sortContent ?  (historyContent
                .sort((a,b)=>a.quantity-b.quantity)
                .map(content=>(<ContentCard key={content._id} content={content}/>)))
                :
                (historyContent
                    .sort((a,b)=>b.quantity-a.quantity)
                    .map(content=>(<ContentCard key={content._id} content={content}/>)))
            }
           </div>
        </div>
    );
};

export default HistoryPage;