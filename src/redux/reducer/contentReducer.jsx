import { actionTypes } from "../actionType/actionTypes"

const initialState = {
    contents: [],
    history: [],
    toggle: false
}

export const contentReducer = (state = initialState, action) => {
    let selectedContent
    if (action.type === actionTypes.ADD_TO_HISTORY || action.type === actionTypes.REMOVE_FROM_HISTORY) {
        selectedContent = state.history.find(history => history._id === action.payload._id)

    }
    let remainingContents
    if(action.type === actionTypes.UPDATE_CONTENT){
        remainingContents= state.contents.filter(content=> content._id !== action.payload.id)
    }
    switch (action.type) {
        case actionTypes.LOAD_CONTENT:
            return {
                ...state,
                contents: action.payload
            }

        case actionTypes.ADD_TO_HISTORY:
            if (selectedContent) {
                const newHistory = state.history.filter(history => history._id !== selectedContent._id)
                selectedContent.rating = selectedContent.rating + 1
                return {
                    ...state,
                    history: [...newHistory, selectedContent]
                }
            }

            else {
                return {
                    ...state,
                    history: [...state.history, { ...action.payload, rating: 1 }]
                }
            }


        case actionTypes.REMOVE_FROM_HISTORY:
            if (selectedContent.rating > 1) {
                const newHistory = state.history.filter(content => content._id !== action.payload._id)
                selectedContent.rating = selectedContent.rating - 1
                return {
                    ...state,
                    history: [...newHistory, selectedContent]
                }
            }
            else  {
                // const newHistory = state.history.filter(content=> content._id !== action.payload._id)

                return {
                    ...state,
                    history: [...state.history.filter(content => content._id !== action.payload._id)]
                }
            }
           
        case actionTypes.TOGGLE:
            return {
                ...state,
                toggle: !state.toggle,
            }
            
            case actionTypes.ADD_CONTENT:
            return {
                ...state,
                contents:[...state.contents,action.payload]
            }

            case actionTypes.DELETE_CONTENT:
               
            return {
                ...state,
                contents:[...state.contents.filter(content=> content._id !== action.payload)]
            }
            case actionTypes.UPDATE_CONTENT_CONTENT:
                
            return {
                ...state,
                contents:[...remainingContents,action.payload.newContent]
            }

        default:
            return state
    }

}