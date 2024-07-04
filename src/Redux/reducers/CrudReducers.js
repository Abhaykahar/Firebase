let initialState={
    users:[],
    single:null,
    erro:null,
}

const CrudReducers = (state=initialState,action) =>{
    switch (action.type) {
        case 'viewuser':
            return {
                ...state,
                users:action.payload,
                error:null,
            }
        case 'viewusererror':
            return{
                ...state,
                error:action.payload
            }
        
        case 'addrecord':
            return{
                ...state,
                userList:[...state.userList],
                error:null
            }
        case 'adderror':
                return{
                    ...state,
                    error:action.payload
                }

        case 'delete':
            return{
                ...state,
                users:state.users.filter(val=>val.id != action.payload),
                error:null
            }
        case 'deleteerror':
            return{
                ...state,
                error:action.payload
            }
        case 'edit':
            console.warn(action.payload);
            return{
                ...state,
                single:action.payload
            }

        case 'editerror':
            return{
                ...state,
                error:action.payload
            }

    


    
        default:
            return state;
    }
}

export default CrudReducers;