import createDataContext from './createDataContext';
import { State } from 'react-native-gesture-handler';

const locationReducer = (sate, action) => {
    switch (action.type) {
        default:
            return State;
    }
};

const startRecoding = dispatch => () => { };
const stopRecording = dispatch => () => { };
const addLocation = dispatch => () => { };

export default { Context, Provider } = createDataContext(
    locationReducer,
    { startRecoding, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
);