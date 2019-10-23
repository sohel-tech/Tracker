import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, actions) => {
    switch (actions.type) {
        case 'add_error':
            return { ...state, errorMessage: actions.payload };
        default:
            return state;
    }
};


const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (err) {
            //console.log(err.response.data);
            dispatch({ type: 'add_error', payload: 'Something went worng with sign up' });
        }

    };
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
    { isSignedIn: false, errorMessage: '' }
);