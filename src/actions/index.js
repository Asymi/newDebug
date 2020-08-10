const loading = location => ({ type: 'LOADING', payload: location });

const loadResult = ({ results: { sunrise, sunset } }) => ({ 
    type: 'LOAD_RESULT',
    payload: { sunrise, sunset } 
});

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const longLat = await fetchLongLat(searchTerm);
            const riseSet = await fetchSunriseSunset(longLat);
            dispatch(loadResult(riseSet))
        } catch (err) {
            console.warn(err.message);
        };
    };
};


// Helpers
const fetchLongLat = async searchTerm => {
    try {
        const resp = await fetch(`https://geocode.xyz/${searchTerm}?json=1`);
        const data = await resp.json();
        return data;
    } catch(err) {
        throw new Error(err.message)
    }
}

const fetchSunriseSunset = async ({ longt, latt }) => {
    try {
        const resp = await fetch(`https://api.sunrise-sunset.org/json?lat=${latt}&lng=${longt}&date=today`);
        const data = await resp.json();
        return data;
    } catch(err) {
        throw new Error(err.message)
    }
}