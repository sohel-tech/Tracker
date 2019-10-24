import createDataContext from './createDataContext';
import { State } from 'react-native-gesture-handler';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload };
        default:
            return state;
    }
};

const startRecoding = dispatch => () => { };
const stopRecording = dispatch => () => { };
const addLocation = dispatch => (location) => {
    dispatch({ type: 'add_current_location', payload: location });
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecoding, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
);