import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';


const authReducer = (state, actions) => {
    switch (actions.type) {
        case 'add_error':
            return { ...state, errorMessage: actions.payload };
        case 'signin':
            return { errorMessage: '', token: actions.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
}


const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        //console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        //console.log(err.response.data);
        dispatch({ type: 'add_error', payload: 'Something went worng with sign up' });
    }

};


const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with Sign in'
        })
    }
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);