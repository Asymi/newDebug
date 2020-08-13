const initState = { location: "", result: { sunrise: "", sunset: "" }, loading: false };

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { location: action.payload, loading: true };
        case 'LOAD_RESULT':
            return { ...state, result: action.payload, loading: false };
        default:
            // If you don't set a default state, then when mSTP is called in Search/index.js it doesn't have a state to reference
            // Question: mSTP sends an action of type @@INIT then?
            return state;
    };
};

export default searchReducer;