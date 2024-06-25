let initialState={
    users:[],
    erro:null,
}

const CrudReducers = (state=initialState,action) =>{
    switch (action.type) {
        case 'view':
            return state
    
        default:
            return state;
    }
}

export default CrudReducers;