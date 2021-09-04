import {
    RETERIVE_JWT_TOKEN, LOGIN_USER, SET_JWT_TOKEN, REMOVE_JWT_TOKEN,
    SET_USER_LOGIN_DATA, CLEAR_USER_LOGIN_DATA,
    POST_USER_LOGIN_REQUEST, POST_USER_LOGIN_SUCCESS,
    POST_USER_LOGIN_FAILURE, CLEAR_USER, SET_USER, UPDATE_LOGIN_PHONE,
    SET_PHONE_KEY, SET_INVALID_PHONE_KEY, SET_PHONE_VERIFIED,
    SET_FORGOT_PASSWORD_EMAIL, SET_FORGOT_PASSWORD_ERROR,CLEAR_USER_SIGNUP_DATA,
    SET_FORGOT_PASSWORD_SUCCESS, INCREASE_VEHICLE_COUNT,LOG_OUT,SET_USER_SIGNUP_DATA
} from '../actions/types';

export const initialState = {
    userName: null,
    refreshToken: null,
    errorMessage: "",
    loggedIn: false,
    token: null,
    isLoading: true,
    user: {
        province: '',
        district: '',
        email: '',
        firstname: '',
        invitecode: '',
        lastname: '',
        password: '',
        phone: '',
        role: "Customer",
        status: 100,
        step: 1,
        nextStep: '',
        country: null,
        token: null,
        referralCode: null
    },
    signUpData:{
        province: '',
        district: '',
        email: '',
        firstname: '',
        invitecode: '',
        lastname: '',
        password: '',
        phone: '',
        role: "Customer",
        status: 100,
        step: 1,
        country: null,
        token: null,
    },
    loginData: {
        email: 'deepakkhanal190@saayog.com', // Remove value in prod
        password: 'Pass123@', // Remove value in prod
        phoneKey: '',
    },
    forgotPassword: {
        email: '',
        error: null,
        success: null,
    }
    //  phone:null,
    //  firstTimePhoneVerified:false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case RETERIVE_JWT_TOKEN:
            return { ...state, token: action.payload };
        case LOGIN_USER:
            console.log("=============USER IS NOW LOGGED IN SUCCESSFULLY==================");
            console.log(action.payload);
            return { ...state, loggedIn: true, token: action.payload.token, user: action.payload };
        case SET_JWT_TOKEN:
            //console.log(action.payload);
            return { ...state, token: action.payload };
        case REMOVE_JWT_TOKEN:
            return { ...state, token: null, loggedIn: false };
        case POST_USER_LOGIN_REQUEST:
            return { ...state, token: null, loggedIn: false };
        case POST_USER_LOGIN_SUCCESS:
            return { ...state, user: action.payload, loggedIn: true, token: action.payload.token };
        case POST_USER_LOGIN_FAILURE:
            return { ...state, loggedIn: false, token: null, loginData: { ...state.loginData, error: 'NO_MATCH' } };
        case SET_USER:
            return { ...state, user: { ...state.user, ...action.payload } };
        case CLEAR_USER:
            return { ...state, user: { email: '', password: '' }, loggedIn: false, token: null };
        case SET_USER_LOGIN_DATA:
            return { ...state, loginData: { ...state.loginData, ...action.payload, error: null } };
        case CLEAR_USER_LOGIN_DATA:
            return { ...state, loginData: { email: '', password: '' } };
        case UPDATE_LOGIN_PHONE:
            return { ...state, user: { ...state.user, phone: action.payload } };
        case SET_PHONE_KEY:
            return { ...state, loginData: { ...state.loginData, phoneKey: action.payload }, errorMessage: '' };
        case SET_INVALID_PHONE_KEY:
            return { ...state, loginData: { ...state.loginData, phoneKey: null }, errorMessage: action.payload };
        case SET_PHONE_VERIFIED:
            return { ...state, user: { ...state.user, phoneVerified: action.payload }, loginData: { ...state.loginData, phoneKey: null } };
        case SET_FORGOT_PASSWORD_EMAIL:
            return { ...state, forgotPassword: { email: action.payload } };
        case SET_FORGOT_PASSWORD_ERROR:
            return { ...state, forgotPassword: { ...state.forgotPassword, error: action.payload, success: null } };
        case SET_FORGOT_PASSWORD_SUCCESS:
            return { ...state, forgotPassword: { ...state.forgotPassword, error: null, success: true } };
        case INCREASE_VEHICLE_COUNT:
            return { ...state, user: { ...state.user, numberOfVehicle: state.numberOfVehicle + 1 } }
        case SET_USER_SIGNUP_DATA:
            return {...state, signUpData:action.payload};
        case CLEAR_USER_SIGNUP_DATA:
            return {...state, signUpData:{
                province: '',
        district: '',
        email: '',
        firstname: '',
        invitecode: '',
        lastname: '',
        password: '',
        phone: '',
        role: "Customer",
        status: 100,
        step: 1,
        country: null,
        token: null,
            }}
        case LOG_OUT:
            return {
                ...state, loggedIn: false, token: null, user: {
                    province: '',
                    district: '',
                    email: '',
                    firstname: '',
                    invitecode: '',
                    lastname: '',
                    password: '',
                    phone: '',
                    role: "Customer",
                    status: 100,
                    step: 1,
                    nextStep: '',
                    country: null,
                    token: null,
                    referralCode: null
                }
            }
        default:
            return state;
    }
};

export default authReducer;
