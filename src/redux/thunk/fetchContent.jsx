import { loadContent } from "../actionCreator/actionCreator"


export const fetchContent=()=>{
    return async(dispatch)=>{
        const res= await fetch("http://localhost:5000/food")
        const data= await res.json()
       // console.log(data)
        if(data.length){
            dispatch(loadContent(data))
        }
    }
}