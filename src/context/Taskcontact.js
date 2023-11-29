import { createContext, useReducer } from "react";

export const Taskcontext = createContext()


const taskReducer = (state, action) => {
    switch (action.type){

        case 'ADD_TASK':
            const id = Math.random() * 100
            let task = {...action.payload,id}
            return {...state,taskList:[...state.taskList,task]}

        case 'REMOVE_TASK':
            let list = state.taskList.filter((task) => task.id !== action.payload.id)
            return {...state,taskList:list}

        case 'UPDATE_TASK':
            let updatelist = state.taskList.map((task) => task.id === action.payload.id ? action.payload : task)
            return {...state,taskList:[...updatelist]}

        case 'GET_TASK':
            return state.taskList

        case 'SET_SELECTED_TASK':
            return {...state,selectTask: {...action.payload}}
        
        case 'GET_SELECTED_TASK':
            return state.selectTask

        default:
            return state
    }
}

export const TaskcontextProvider = ({children}) => {

    const [state, dispatch] = useReducer(taskReducer, {
        taskList: [],
        selectTask: {}
    })
    return(
        <Taskcontext.Provider value={{state, dispatch}}>
            {children}
        </Taskcontext.Provider>
    )
}