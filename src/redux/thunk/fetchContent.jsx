import { loadContent } from "../actionCreator/actionCreator"


export const fetchContent=()=>{
    return async(dispatch)=>{
        const res= await fetch("https://bistroserver.bloperation.com/food")
        const data= await res.json()
       // console.log(data)
        if(data.length){
            dispatch(loadContent(data))
        }
    }
}