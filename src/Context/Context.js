import React, {useReducer, createContext, useContext, useRef} from 'react';

const initalTodoItems = [];

function listReducer(state, action){
    switch (action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(
                todo => todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`에러가 발생했습니다. ${action.type}`)
    }
}

const ListStateContext = createContext();
const ListDispatchContext = createContext();
const ListNextIdContext = createContext();

export function ListProvider({children}){
    const [state, dispatch] = useReducer(listReducer, initalTodoItems);
    const nextId = useRef(5);
    return (
        <ListStateContext.Provider value={state}>
            <ListDispatchContext.Provider value={dispatch}>
                <ListNextIdContext.Provider value={nextId}>
                    {children}
                </ListNextIdContext.Provider>
            </ListDispatchContext.Provider>
        </ListStateContext.Provider>
    );
}

export function useTodoState(){
    const context = useContext(ListStateContext);
    if(!context){
        throw new Error('Error!');
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(ListDispatchContext);
    if(!context){
        throw new Error('Error!');
    }
    return context;
}

export function useTodoNextId(){
    const context = useContext(ListNextIdContext);
    if(!context){
        throw new Error('Error!');
    }
    return context;
}
