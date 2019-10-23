import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';


const authReducer = (state, actions) => {
    switch (actions.type) {
        case 'add_error':
            return { ...state, errorMessage: actions.payload };
        case 'signup':
            return { errorMessage: '', token: actions.payload };
        default:
            return state;
    }
};



const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        //console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        //console.log(err.response.data);
        dispatch({ type: 'add_error', payload: 'Something went worng with sign up' });
    }

};


const signin = (dispatch) => {
    return ({ email, password }) => {

    };
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout },
    { token: null, errorMessage: '' }
);