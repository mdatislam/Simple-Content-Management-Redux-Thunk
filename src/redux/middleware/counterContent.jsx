import { actionTypes } from "../actionType/actionTypes"

export const contentCounter=()=>(next)=>(action)=>{
    // const state= store.contents
     //const contents= state.contents.history 
    if(action.type=== actionTypes.ADD_TO_HISTORY){
        const newAction= {...action, payload:{...action.payload, 
            contentReadingTime: new Date().toLocaleTimeString(),
            
            
        }}
     return next(newAction)
    }
    return next(action)
}


/* 
To get time and date you should use

    new Date().toLocaleString();

>> "09/08/2014, 2:35:56 AM"
To get only the date you should use

    new Date().toLocaleDateString();

>> "09/08/2014"
To get only the time you should use

    new Date().toLocaleTimeString();

>> "2:35:56 AM"
Or if you just want the time in the format hh:mm without AM/PM for US English

    new Date().toLocaleTimeString('en-US', { hour12: false, 
                                             hour: "numeric", 
                                             minute: "numeric"});
>> "02:35"
or for British English

    new Date().toLocaleTimeString('en-GB', { hour: "numeric", 
                                             minute: "numeric"});

>> "02:35"
 */