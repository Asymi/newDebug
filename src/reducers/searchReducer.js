const initState = { location: "", result: { sunrise: "", sunset: "" }, loading: false };

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { location: action.payload, loading: true };
        case 'LOAD_RESULT':
            return { ...state, result: action.payload, loading: false };
    };
};

export default searchReducer;