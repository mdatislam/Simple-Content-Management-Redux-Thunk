import { useEffect } from "react";
import ContentCard from "../components/ContentCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../redux/thunk/fetchContent";




const Home = () => {
    const dispatch = useDispatch()
    // console.log(location.pathname);
    //const [foods,setFood]=useState([])
    useEffect(() => {

        dispatch(fetchContent())
    }, [])

    const contents = useSelector(state => state.contents.contents)
    const histories =useSelector(state=> state.contents.history)
    const concatenatedArray= contents.map(content=>{
        const matchArray=histories.find(history=>history._id===content._id)
        return {...content,...(matchArray && {rating:matchArray.rating})}
    })
    //console.log(concatenatedArray);
    
    return (
        <div>
            <div>
                <h2 className="text-center text-xl font-bold my-4"> Total Contents:  {contents.length}</h2>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 w-max mx-auto px-2">
                {
                    concatenatedArray
                    .sort((a,b)=>b.rating-a.rating)
                    .map(content => (<ContentCard key={content._id}
                        content={content}
                        history={history}

                    />))
                }
            </div>
        </div>
    );
};

export default Home;