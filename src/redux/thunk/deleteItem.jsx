import { deleteContent } from "../actionCreator/actionCreator"

export const deletedItem=id=>{
    return async(dispatch)=>{
        console.log(id);
        const res= await fetch(`https://bistroserver.bloperation.com/food/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        const delResponse= await res.json()
        console.log(delResponse);
        if(delResponse.deletedCount){
            dispatch(deleteContent(id))
        }
    }
}