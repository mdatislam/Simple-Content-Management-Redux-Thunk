

import { actionTypes } from "../actionType/actionTypes"

export const loadContent = (content) => {
    // console.log(content);
    return {
        type: actionTypes.LOAD_CONTENT,
        payload: content
    }
}

export const addToHistory = (content) => {

    return {
        type: actionTypes.ADD_TO_HISTORY,
        payload: content
    }
}

export const removeFromHistory = (content) => {
    return {
        type: actionTypes.REMOVE_FROM_HISTORY,
        payload: content
    }
}

export const sortHistoryContent = () => {
    console.log("toggle click");
    return {
        type: actionTypes.TOGGLE
    }
}

export const addContent = (content) => {
    return {
        type: actionTypes.ADD_CONTENT,
        payload: content
    }
}

export const deleteContent = id => {
    return {
        type: actionTypes.DELETE_CONTENT,
        payload: id
    }
}

export const editContent=({id,newContent})=>{
  return {
    type:actionTypes.UPDATE_CONTENT,
    payload:{id,newContent}
  }
    
}