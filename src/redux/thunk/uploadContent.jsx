import { addContent } from "../actionCreator/actionCreator"

export const uploadContent=(newContent)=>{
    return async(dispatch)=>{
        const res= await fetch("http://localhost:5000/food",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newContent)
        })
        const resResult=await res.json()
        console.log(resResult);
        if(resResult.insertedId){
            dispatch(addContent(newContent))
        }
    }

    }
