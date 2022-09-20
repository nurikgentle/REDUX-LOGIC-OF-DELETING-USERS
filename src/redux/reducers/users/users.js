import axios from "axios"

const initialState = {
    arr: [
        {
        id: 1,
        name: 'Sanjar'
    },
        {
        id: 2,
        name: 'Nurik'
    },
        {
        id: 3,
        name: 'Islam'
    },
        {
        id: 4,
        name: 'Alina'
    },
        {
        id: 5,
        name: 'Ivan'
    }
],
    count: 0,
    name: ""
}

export default(state = initialState, action) => {
    switch(action.type) {
        case "PLUS_ONE" : {
            return{
                ...state,
                count: state.count +1
            }
        }
        case "MINUS_ONE" : {
            return{
                ...state,
                count: state.count -1
            }
        }
        case "GET_ALL": {
            return{
                ...state,
                arr: action.arr
            }
        }
        case "CHANGE_NAME": {
            return{
                ...state,
                name: action.name
            }
        }
        case 'DELETE_USER':
            return {
                ...state,
                arr: state.arr.filter(user => user.id !== action.payload)
            }
        default: return state
    }
}


export const plusCount = () => {
    return(dispatch) => {
        return dispatch({type: "PLUS_ONE"})
    }
}
export const minusCount = () => {
    return(dispatch) => {
        return dispatch({type: "MINUS_ONE"})
    }
}

export const getAllUsers = () => {
    return(dispatch) => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => dispatch({type: 'GET_ALL', arr: data}))
    }
}

export const changeName = (name) => {
    return(dispatch) => {
        return dispatch ({type: 'CHANGE_NAME', name})
    }
}