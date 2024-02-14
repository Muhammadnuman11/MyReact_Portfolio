const initialState = {
    activeSection: 'home',
};

const reducer = (state, action)=>{
    {
        switch (action.type) {
            case "CHANGE_SECTION": 
            return {...state, activeSection: action.payload };
            default:
                return state
        }
    }
}

export { initialState, reducer};