import { SET_AUTHED_USER } from '../actions/auth';


const authedUserReducer = (state = null, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.userid;
        default:
            return state;
    }
};

export default authedUserReducer;


