import { editContent } from "../actionCreator/actionCreator";

export const modifiedContent=({newContent,_id})=>{
    return async(dispatch)=>{
        console.log(_id);
        const res= await fetch(`https://bistroserver.bloperation.com/food/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newContent)
        })
        const resResult=await res.json()
        console.log(resResult);
        if(resResult.acknowledged){
            dispatch(editContent({newContent,_id}))
        }
    }

    }
