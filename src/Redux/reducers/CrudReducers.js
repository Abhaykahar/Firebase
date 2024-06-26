let initialState={
    users:[],
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

    


    
        default:
            return state;
    }
}

export default CrudReducers;