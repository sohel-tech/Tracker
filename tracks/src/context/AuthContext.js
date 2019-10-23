import createDataContext from './createDataContext';

const authReducer = (state, actions) => {
    switch (actions.type) {
        default:
            return state;
    }
};


const signup = (dispatch) => {
    return ({ email, password }) => {

    };
};

const signin = (dispatch){
    return ({ email, password }){

    };
};

const signout = (dispatch){
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {},
    { isSignedIn: false }
);