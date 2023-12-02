import { editContent } from "../actionCreator/actionCreator";

export const modifiedContent=({newContent,id})=>{
    return async(dispatch)=>{
        const res= await fetch(`http://localhost:5000/food/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newContent)
        })
        const resResult=await res.json()
        console.log(resResult);
        if(resResult.acknowledged){
            dispatch(editContent({newContent,id}))
        }
    }

    }
