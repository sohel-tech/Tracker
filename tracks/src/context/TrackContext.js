import createDataContext from './createDataContext';


const trackerReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
};

const fetchTracks = dispatch => () => { };

const createTrack = dispatch => () => {};


export const {Provider,Context} = createDataContext(
    trackerReducer,
    {fetchTracks,createTrack},
    []
);
