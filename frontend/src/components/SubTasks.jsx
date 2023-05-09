import React, { createContext, useContext, useEffect, useReducer } from 'react'

// importing utils 
import {v4 as uuid } from 'uuid'


// importing images 
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import { useDispatch, useSelector } from 'react-redux'
import { postSubTasks } from '../features/thunks/TaskThunk'
import { setFetchSubTasks } from '../features/taskSlice'
import { setSubTaskCreation, setSubTaskDeletion } from '../features/subtaskSlice'


/* 
const SubTasks = () => {

    let subTaskID = 0

    const Types = {
        ADD_OBJ: "ADD_OBJ",
        REMOVE_OBJ: "REMOVE_OBJ",
        EDIT_OBJ : "EDIT_OBJ",
        POST_SUBTASKS : "POST_SUBTASKS"
      };

    const dispatch = useDispatch()
    let fetchSubTasks = useSelector((state) => state.tasks.fetchSubTasks)

    console.log('fetchSubTasks value : ' , fetchSubTasks)



    const SubTaskContext = createContext();

    const SubTaskReducer = (state, { type, payload }) => {
    
    switch (type) {
        case Types.ADD_OBJ:
        return {
            ...state,
            allSubTasks: [...state.allSubTasks, payload]
        };
        case Types.REMOVE_OBJ:
        return {
            ...state,
            allSubTasks: state.allSubTasks.filter((obj) => obj.id !== payload)
        };
        case Types.EDIT_OBJ:
            // obtaining the current obj and updating the text
             state.allSubTasks[payload.id].text = payload.text 
            return{
                allSubTasks: ( 
                    [...state.allSubTasks]
                )
            }
        case Types.POST_SUBTASKS : 
            console.log('data to post : ' , state.allSubTasks)
            console.log('length of the allSubTasks : ' , state.allSubTasks.length)

            return {
                allSubTasks : (
                    [...state.allSubTasks]
                )
            }
        default:
        return state;
    }
    };

    const SubTaskState = ({ children }) => {
    const initialState = {
        allSubTasks: [],
        fetchSubTasks : fetchSubTasks
    };

    if(fetchSubTasks===true){
        console.log('subTaskState : ' , SubTaskState )
        // dispatch(setFetchSubTasks(false))
    }

    const [state, dispatch] = useReducer(SubTaskReducer, initialState);

    const addSubTask = (obj) => {
        dispatch({
        type: Types.ADD_OBJ,
        payload: obj
        });
    };

    const removeSubTask = (obj) => {
        dispatch({
        type: Types.REMOVE_OBJ,
        payload: obj
        });
    };

    const editSubTask = (obj) => {
        dispatch({
            type : Types.EDIT_OBJ,
            payload : obj
        })
    }

    const postSubTasks = () => {
        dispatch({
            type : Types.POST_SUBTASKS,
        })
    }


    return (
        <SubTaskContext.Provider
        value={{
            allSubTasks: state.allSubTasks,
            addSubTask,
            editSubTask,
            removeSubTask,
            postSubTasks
        }}
        >
        {children}
        </SubTaskContext.Provider>
    );
    };

    const ObjectCreator = () => {
    const { addSubTask } = useContext(SubTaskContext);
    const createObj = () => {
        const obj = {
        id: subTaskID,
        text : ''
        };
        subTaskID = subTaskID + 1
        addSubTask(obj);
    };
    return (
        <div onClick={createObj}>
            <label>Add SubTask</label>
            <img src = {plus} alt = "plus" />
        </div>
    )
    };

    const PostSubTasks = ({id}) => {
        const {postSubTasks} = useContext(SubTaskContext)
        let temp = fetchSubTasks
        const startPost = () => {
            if(fetchSubTasks===true){
                console.log('fetchSubTask is true, posting')
                postSubTasks()
            }
        }


        return(
            <div value = {temp} onChange={startPost}></div>
        )
    }


    const MyObject = ({ id }) => {
    const { editSubTask } = useContext(SubTaskContext)
    const { removeSubTask } = useContext(SubTaskContext);
    const removeSelf = () => {
        removeSubTask(id);
        subTaskID = subTaskID - 1
    };

    const editSelf = (e) => {
        console.log('inside edit self')
        const obj = {
            id : id,
            text : e.target.value
        }
        console.log('updated text : ' , obj.text)
        editSubTask(obj)
    };
    return (
        <div style = {{"display" : "flex" , "flexDirection" : "row" , "justifyContent" : "flex-start" , "alignItems" : "center"}}>
            <p style = {{"marginTop" : "15px"}}>{id}</p>
            <textarea type = "text" placeholder = "Enter Subtask" onChange = {editSelf} style = {{"width" : "450px" , "height" : "50px" ,  "marginLeft" : "5px"}}/>
            <div onClick = {removeSelf} style = {{"border" : "solid 2px black" , "width" : "30px" , "marginLeft" : "10px"}}>
                <img src = {minus} alt = "delete"  />
            </div>
        </div>
    );
    };


    const ObjectList = () => {
    const { allSubTasks } = useContext(SubTaskContext);
    return (
        <>
        {allSubTasks.map((el) => (
            <MyObject key={el.id} id={el.id} text = {el.text} />
        ))}
        </>
    );
    };


  return (
    <div style = {{"display" : "flex" ,"flexDirection" : "column" , "justifyContent" : "center" , "alignItems" : "flex-start" , "marginTop" : "10px"}}>
        <SubTaskState>
            <ObjectCreator />
            <ObjectList />
            <PostSubTasks />
        </SubTaskState>
    </div>
  )
}

export default SubTasks

*/



const SubTasks = () => {

    // obtain all the subTasks list 
    let allSubTasks = useSelector((state) => state.subtasks.allSubTasks)
    let fetchSubTasks = useSelector((state) => state.tasks.fetchSubTasks)

    const dispatch = useDispatch()

    if(fetchSubTasks===true){
        console.log('fetching the subtasks')

        dispatch(setFetchSubTasks(false))
    }
    

    const handleSubTaskCreation = (e) => {
        console.log('handling subtask creation')
        const item = {
            subTaskUUID : uuid(),
            subTaskContent : '',
        }
        dispatch(setSubTaskCreation(item))
        
    }

    const handleSubTaskDeletion = (e , subTaskUUID) => {
        console.log('subTaskUUID : ' , subTaskUUID)
        console.log('handling subTask deletion')
        dispatch(setSubTaskDeletion(subTaskUUID))
    }

    const SubTaskTextChange = (e , subTask) => {
        console.log('subTaskText Change')
        subTask.subTaskContent = e.target.value
        const {value , name } = e.target


    }
    
    
    return (
        <div style = {{"display" : "flex" , "flexDirection" : "column" , "justifyContent" : "center" , "alignItems" : "flex-start" }}>
            <div onClick={handleSubTaskCreation}>
                <label>Add SubTask</label>
                <img src = {plus} alt = "plus" />
            </div>

            {allSubTasks.map((subTask) => (
                <div>
                    <div style = {{"display" : "flex" , "flexDirection" : "row" , "justifyContent" : "flex-start" , "alignItems" : "center"}}>
                        <textarea type = "text" placeholder = "Enter Subtask" value = {subTask.subTaskContent} onChange = {(e) => SubTaskTextChange(e , subTask)} style = {{"width" : "450px" , "height" : "50px" ,  "marginLeft" : "5px"}}/>
                        <div onClick = {(e) => handleSubTaskDeletion(e , subTask.subTaskUUID)} style = {{"border" : "solid 2px black" , "width" : "30px" , "marginLeft" : "10px"}}>
                            <img src = {minus} alt = "delete"  />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SubTasks
