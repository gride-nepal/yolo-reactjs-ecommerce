import {
  RETERIVE_JWT_TOKEN,
  LOGIN_USER,
  SET_JWT_TOKEN,
  REMOVE_JWT_TOKEN,
  CLEAR_USER,
  SET_USER,
  SET_USER_LOGIN_DATA,
  CLEAR_USER_LOGIN_DATA,
  SET_PHONE_VERIFIED,
  POST_USER_LOGIN_FAILURE,
  UPDATE_LOGIN_PHONE,
  SET_PHONE_KEY,INCREASE_VEHICLE_COUNT,
  SET_INVALID_PHONE_KEY,
  SET_FORGOT_PASSWORD_EMAIL,SET_FORGOT_PASSWORD_ERROR,
  SET_FORGOT_PASSWORD_SUCCESS,
  LOG_OUT,SET_USER_SIGNUP_DATA,CLEAR_USER_SIGNUP_DATA
} from './types';
import {uiLoadingStart, uiLoadingComplete} from './uiActions';
import config from './../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Endpoint from '../../util/endpoint';
import axios from 'axios';
import { setCurrentEmail,setCurrentPhone } from './userActions';
import io from "socket.io-client";
import strings from '../../util/languages/strings';
import instance from '../../util/axiosRequest';
import {storeValueIntoEncryptedStorage,retrieveValueFromEncryptedStorage} from '../../context/auth/EncryptedStorageMiddleware';
//let socket = io(Endpoint.BASE_SOCKETIO_URI, {jsonp:false});
// import store from "../store/createStore";
//import { useNavigation } from '@react-navigation/native';

//const navigation = useNavigation();

export const updateLoginPhone = phone => ({
  type: UPDATE_LOGIN_PHONE,
  payload: phone,
});

export const setPhoneKey = phoneKey => ({
  type: SET_PHONE_KEY,
  payload: phoneKey,
});

export const increaseVehicleCount = () => ({
  type: INCREASE_VEHICLE_COUNT
})

export const setPasswordResetEmail = email => ({
  type: SET_FORGOT_PASSWORD_EMAIL,
  payload: email
})

export const setForgotPasswordEmail = email => {
  return async (dispatch) => {
    dispatch(setPasswordResetEmail(email));
  }
}

export const setPasswordResetError = error => ({
  type: SET_FORGOT_PASSWORD_ERROR,
  payload: error
})

export const setPasswordResetSuccess = () => ({
  type: SET_FORGOT_PASSWORD_SUCCESS
})

export const setInvalidPhoneKey = message => ({
  type: SET_INVALID_PHONE_KEY,
  payload: message,
});

export const setPhoneVerified = status => ({
  type: SET_PHONE_VERIFIED,
  payload: status,
});

export const reteriveJwtToken = token => ({
  type: RETERIVE_JWT_TOKEN,
  payload: token,
});

export const clearSignUpdata = () => ({
  type: CLEAR_USER_SIGNUP_DATA
})
export const setUserLogin = user => ({
  type: LOGIN_USER,
  payload: user,
});

export const logOutUser = () => ({
  type:LOG_OUT
})

export const setUserLogin2 = user => {
  return async (dispatch) => {
    dispatch(setUserLogin(user));
  };
};

export const postDriverLoginFailure = () => ({
  type: POST_USER_LOGIN_FAILURE,
});

export const setJwtToken = token => ({
  type: SET_JWT_TOKEN,
  payload: token,
});

export const removeJwtToken = () => ({
  type: REMOVE_JWT_TOKEN,
});

export const setUserData = user => ({
  type: SET_USER,
  payload: user,
});

export const setSignUpData = data => ({
  type: SET_USER_SIGNUP_DATA,
  payload: data
})
export const clearUserData = () => ({
  type: CLEAR_USER,
});

export const setLoginData = user => ({
  type: SET_USER_LOGIN_DATA,
  payload: user,
});

export const clearUserLoginData = () => ({
  type: CLEAR_USER_LOGIN_DATA,
});

export const setUserLoginData = user => {
  return async (dispatch, store) => {
    dispatch(setLoginData(user));
  };
};

export const driverAutoLogin = async() => {
  return async (dispatch) => {
    console.log("GOT MY CALL" );
     await dispatch(getAsyncStorageJwtToken());
  }
}

export const getAsyncStorageJwtToken = async() => {
  return async (dispatch) => {

    console.log("GET ASYNC STORE JWT TOKEN 1-a");
    try {
      let token = await AsyncStorage.getItem(config.ASYNC_STORAGE_KEY);
      if (token) {
        //console.log(token);
        //console.log("STORE JWT TO STORE");
         dispatch(reteriveJwtToken(token));
    //  let res = await checkMyJwtToken(store().deviceInformationReducer.deviceInformation,store().authReducer.token);
    //  //console.log(res);
   //  if(res){
       await dispatch(verifyJwtToken());
    // }
   
    console.log("GOT MY TOKEN"+token );
      }
    } catch (err) {
      console.error(err);
      console.log("NO TOKEN"+err );
    }
  };
};

export const setAsyncStorageJwtToken = jwt => {
  return async dispatch => {
    //console.log(jwt);
    try {
      await storeValueIntoEncryptedStorage("user_session",{
        age : 21,
        token : "ACCESS_TOKEN",
        username : "emeraldsanto",
        languages : ["fr", "en", "de"]
    });
      await retrieveValueFromEncryptedStorage("user_session");
      await AsyncStorage.setItem(config.ASYNC_STORAGE_KEY, jwt);

      //     dispatch(setJwtToken(jwt));
    } catch (err) {
      console.error(err);
    }
  };
};

export const removeAsyncStorageJwtToken = () => {
  return async dispatch => {
    try {
      await AsyncStorage.removeItem(config.ASYNC_STORAGE_KEY);
    } catch (err) {
      console.error(err);
    }
    dispatch(removeJwtToken());
  };
};

export const logOut = () => {
  return async (dispatch,store) => {
    await dispatch(removeAsyncStorageJwtToken());
    await dispatch(logOutUser());
  }
}

export const verifyJwtToken = () => {
  return async (dispatch, store) => {
    //console.log(
    //   'STOTE: ' + store().deviceInformationReducer.deviceInformation.appName,
    // );
    //console.log(
    //   'TOKEN: ' + store().authReducer.token,
    // );
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
        Authorization: store().authReducer.token,
      },
    };
  await axios
      .post(
        Endpoint.VERIFY_JWT,
        {
          role: 'CUSTOMER',
        },
        options,
      )
      .then(async (res) => {
        //console.log(res);
        if (res.status === 200) {
          if (res.data.message === 'SUCCESS') {
            //console.log('SUCCESS_LOGIN_MESSAGE');
            await dispatch(setUserLogin(res.data));
            dispatch(setCurrentEmail(res.data.email));
            dispatch(setCurrentPhone(res.data.phone));
            await dispatch(setAsyncStorageJwtToken(res.data.token));
            //     dispatch(uiLoadingComplete());
          }
        }
      })
      .catch(error => {
        //console.log(error);
        //console.log('FAILED_JWT_VERIFY');
       
        // dispatch(clearUserData());
        //  dispatch(removeAsyncStorageJwtToken());
        //   dispatch(uiLoadingComplete());
      });

    //     try {
    //       const res = await userService.verifyJwt(store);
    //       //console.log("VERIFY_TOKEN_RES");
    //       //console.log(res);
    //      if(res.status === 200){
    //       //console.log("SUCCESS VERIFY STATUS 200");
    //       if(res.data.message === 'SUCCESS'){
    //        //console.log("SUCCESS_JWT_VERIFY");
    //          dispatch(setUserLogin(res.data));
    //          dispatch(setAsyncStorageJwtToken(res.data.token));
    //       }else{
    //        //console.log("FAILED_JWT_VERIFY");
    //          dispatch(clearUserData());
    //          dispatch(removeAsyncStorageJwtToken());
    //       }
    //     }
    //     } catch (err) {
    //       console.error(err);
    //       dispatch(clearUserData());
    //       dispatch(removeAsyncStorageJwtToken());
    //  // dispatch(postDeviceInformationFailure(err));
    //   //    dispatch(uiLoadingComplete());
    //     }
  };
};

export const signOut = () => {
  return async (dispatch, store) => {
    //invalidate token by server
    try {
      dispatch(removeAsyncStorageJwtToken());
      //console.log(store().authReducer.token);
    } catch (error) {}
  };
};

export const registerUser = (values) => {
  return async (dispatch) => {
    console.log("MYTEST")
    console.log(values);

   dispatch(setSignUpData(values));
   const options = {
    headers: {
      'Content-Type': 'application/json',
      applicationKey: 'CHALAKPUBLICKEY',
    },
  };
const requestBody = {
firstname: values.firstname,
  lastname: values.lastname,
  email: values.email,
  country: values.country._id,
  phone: values.phone, 
  password: values.password,
  district: values.districtId,
province:values.provinceId,
invitecode: values.invitecode
}
let res = await instance
  .post(
    Endpoint.SIGNUP_CUSTOMER_STEP_ONE,
    requestBody,
    options,
  );


        console.log(res);
        if (res.status === 201) {
          if (res.data.success && res.data.message === 'SUCCESS') {
            console.log('SUCCESS_LOGIN_MESSAGE');
            dispatch(setUserLogin(res.data.data));
            dispatch(setCurrentEmail(res.data.data.email))
            dispatch(setCurrentPhone(res.data.data.phone));
            dispatch(setAsyncStorageJwtToken(res.data.data.token));
            dispatch(clearSignUpdata());
          }
        }
        return res;
       /*   if (res.status === 400) {
          if(!res.data.success && res.data.message === 'Error'){
            let errors = res.data.error;
            errors.map(err => {
              if(err.msg === 'EXISTING_EMAIL' || err.msg === 'EXISTING_ACCOUNT_EMAIL'){
                dispatch(setUserInformation({invalidemail: true,validemail:false,errorMessageemail:strings.DUPLICATE_EMAIL,emailBorder:colors.error}));
              }
              if(err.msg === 'EXISTING_PHONE' || err.msg === 'EXISTING_ACCOUNT_PHONE'){
                dispatch(setUserInformation({invalidphone: true,validemail:false,errorMessageemail:strings.DUPLICATE_EMAIL,emailBorder:colors.error}));
              }
            })

            dispatch(setUserInformation({invalidemail: true,validemail:false,errorMessageemail:strings.DUPLICATE_EMAIL,emailBorder:colors.error}));
           }
          
          dispatch(uiLoadingComplete());
        }*/
 
  }}

export const addLoginPhone = () => {
  return async (dispatch, store) => {
    dispatch(updateLoginPhone(store().authReducer.user.phone));
  };
};

export const postLoginEmailPassword2 = (email,password,appName) => {
  return new Promise(async(resolve, reject) => {
    //console.log('e: '+email);
  //console.log('p: '+password);
  
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: appName,
        applicationKey: 'CHALAKPUBLICKEY',
      },
    };
   
			
    await axios
      .post(
        Endpoint.LOGIN_USER_EMAIL,
        {
          email: email,
          password: password,
          role: 'Driver',
        },
        options,
      )
      .then(res => {
        if (res.status === 200) {
          if (res.data.message === 'SUCCESS') {
            //console.log('SUCCESS_LOGIN_MESSAGE');
           resolve(res);
          }
        }
      })
      .catch(error => {
        //console.log(error);
        //console.log('FAILED_LOGIN_MESSAGE');
        reject(error);
      });
  });
};

export const login = async(email,password,appName) => {
  return new Promise(async(resolve, reject) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: appName,
        applicationKey: 'CHALAKPUBLICKEY',
      },
    };
   
			
    await instance
      .post(
        Endpoint.LOGIN_USER_EMAIL,
        {
          email: email,
          password: password,
          role: 'Driver',
        },
        options,
      )
      .then(res => {
        if (res.status === 200) {
          if (res.data.message === 'SUCCESS') {
            //console.log('SUCCESS_LOGIN_MESSAGE');
        
          }
          resolve(res.data.data);
        }
      })
      .catch(error => {
        reject(error);
      });
  })
}
export const postLoginEmailPassword = (email,password) => {
  //console.log(email+" "+password+" ");
  return async (dispatch, store) => {

    console.log("MYTEST")
    console.log(email+" "+password);
    //console.log(email);
  //console.log(password);
    dispatch(setUserLoginData({email:email,password:password}));
    //dispatch(uiLoadingStart());
 //   let appName = store().deviceInformationReducer.deviceInformation.appName;
          
 
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
      },
    };
// try{
			let res =  await axios
      .post(
        Endpoint.LOGIN_USER_EMAIL,
        {
          email: email,
          password: password
        },
        options,
      );
      console.log("RESPONSE LOGIN API ");
      console.log(res);
      if (res.status === 200) {
        if (res.data.message === 'SUCCESS') {
          //console.log('SUCCESS_LOGIN_MESSAGE');
          dispatch(setUserLogin(res.data));
           dispatch(clearUserLoginData());
          dispatch(setCurrentEmail(res.data.email))
          dispatch(setCurrentPhone(res.data.phone));
          dispatch(setAsyncStorageJwtToken(res.data.token));
          //Save Refresh Token in secure storage as well as jwt
        //  dispatch(uiLoadingComplete());
         // navigation.navigate('Home');
        
        }
      }
      return res;
  //  }catch(err){
  //    console.log(err);
  //    return err;
  //  }
    
/*
    await axios
      .post(
        Endpoint.LOGIN_USER_EMAIL,
        {
          email: email,
          password: password
        },
        options,
      )
      .then(res => {
        if (res.status === 200) {
          if (res.data.message === 'SUCCESS') {
            //console.log('SUCCESS_LOGIN_MESSAGE');
            dispatch(setUserLogin(res.data));
            dispatch(setCurrentEmail(res.data.email))
            dispatch(setCurrentPhone(res.data.phone));
            dispatch(setAsyncStorageJwtToken(res.data.token));
            
            dispatch(uiLoadingComplete());
           // navigation.navigate('Home');
           return res.data.message;
          }
        }
      })
      .catch(error => {
        //console.log(error);
        //console.log('FAILED_LOGIN_MESSAGE');
        
        dispatch(postDriverLoginFailure());
        dispatch(clearUserData());
       // dispatch(removeAsyncStorageJwtToken());
        dispatch(uiLoadingComplete());
        return error;
      });
      */
  };
};



export const postForgotPasswordViaEmail = (email) => {
  //return new Promise((resolve, reject) => {
  return async (dispatch, store) => {
    dispatch(setPasswordResetEmail(email));
    dispatch(uiLoadingStart());
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
      },
    };

    await axios
      .post(
        Endpoint.FORGOT_PASSWORD_EMAIL,
        {
          email: email,
          role: 'Driver',
        },
        options,
      )
      .then(res => {
        //console.log('SUCCESS_PASSWORD'+res.data.message );
        if (res.status === 200) {
          if (res.data.message === 'PASSWORD_RESET_SUCCESS') {
            //console.log('SUCCESS_PASSWORD_RESTORE');
           // dispatch(setUserLogin(res.data));
         //   dispatch(setCurrentEmail(res.data.email))
         //   dispatch(setCurrentPhone(res.data.phone));
        //    dispatch(setAsyncStorageJwtToken(res.data.token));
            // dispatch(uiLoadingComplete());
          //  dispatch(setPasswordResetEmail())
          dispatch(setPasswordResetSuccess());
          //  props.navigation.navigate('Home');
          }
          if(res.data.message === 'EMAIL_NOT_FOUND'){
            //console.log('EMAIL_NOT_FOUND');  
            dispatch(setPasswordResetError(strings.EMAIL_NOT_FOUND_PASSWORD_RESET))
      
          }
          dispatch(uiLoadingComplete());
        }
      })
      .catch(error => {
        //console.log(error);
        dispatch(setPasswordResetError(strings.EMAIL_NOT_FOUND_PASSWORD_RESET))
        //console.log('FAILED_PASSWORD_RESTORE');
        
    //    dispatch(postDriverLoginFailure());
    //    dispatch(clearUserData());
     //   dispatch(removeAsyncStorageJwtToken());
        dispatch(uiLoadingComplete());
      });
  };
//})
}

export const updatePhoneKey = key => {
  return async dispatch => {
    dispatch(setPhoneKey(key));
  };
};

//1. Create a new function that returns a promise
function firstFunction() {
  return new Promise((resolve, reject) => {
    let y = 0;
    setTimeout(() => {
      for (i = 0; i < 10; i++) {
        y++;
      }
      //console.log('loop completed');
      resolve(y);
    }, 2000);
  });
}

export const updateLoginPhonePost = (phoneNumber) => {
  return async (dispatch, store) => {
    dispatch(uiLoadingStart());
//console.log("STOTE: "+store().deviceInformationReducer.deviceInformation.appName);
const options = {
headers:{
  'Content-Type': 'application/json',
  'applicationName': store().deviceInformationReducer.deviceInformation.appName,
  'applicationKey': 'CHALAKPUBLICKEY',
  'Authorization':store().authReducer.token
}
}
    axios.post(Endpoint.UPDATE_PHONE, {
      role:'DRIVER',
      phone:phoneNumber,
      driver_id:store().authReducer.user.driver_id
    }, options
    )
    .then(res => {
      
      //console.log(res);
      if(res.status === 200){
        if(res.data.message === 'SUCCESS'){
          //console.log("SUCCESS_PHONE_UPDATE");
            dispatch(setUserData(res.data));
            if(res.data.nextStep === 'ENTER_CODE'){
              //props.navigation.navigate('VerifyPhone');
            }
         }
        }
        dispatch(uiLoadingComplete());
      })
      .catch(error => {
        //console.log(error);
        //console.log('FAILED_JWT_VERIFY');
        dispatch(uiLoadingComplete());
      });
  };
};

export const phoneVerifyPost = (phone,phoneKey) => {
  return async (dispatch, store) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
        'Authorization':store().authReducer.token
      },
    };
    axios
      .get(
        Endpoint.INITIAL_PHONE_OTP_VERIFY+'?phone='+phone+'&phoneKey='+phoneKey,
        options,
      )
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);

          if (res.data.message === 'PHONE_VERIFIED') {
            dispatch(setPhoneVerified(true));
            dispatch(setUserData(res.data));
         }
         if(res.data.message === 'INVALID_CODE'){
          dispatch(setPhoneVerified(false));
          dispatch(setInvalidPhoneKey(res.data.message));
         }
         return res.data;
        }
      })
      .catch(error => {
        console.log(error);
return error;
      });
  };
};

export const goOnline = () => {
  return async (dispatch, store) => {
    //console.log("I M PRESSED IN");
    const socket = io('http://127.0.0.1:9500');
    /*,{
      timeout: 10000,
      jsonp: false,
      transports: ['websocket'],
      autoConnect: false,
      agent: '-',
      path: 'http://127.0.0.1:9500', // Whatever your path is
      pfx: '-',
      key: "token", // Using token-based auth.
      passphrase: "cookie", // Using cookie auth.
      cert: '-',
      ca: '-',
      ciphers: '-',
      rejectUnauthorized: '-',
      perMessageDeflate: '-',
     
    });*/
    // socket.on("goOnline", data => {
    //   //console.log(data);
    // });
    socket.emit('goOnline', { name:'andyjainson', room:'motoinrupandehi' }, (error) => {
      if(error) {
        alert(error);
      }
    });
    /*
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
        'Authorization':store().authReducer.token
      },
    };
    axios
      .post(
        Endpoint.GO_ONLINE,
        {
          role: 'DRIVER',
          deviceRecordId: store().deviceInformationReducer.deviceInformation
            .deviceRecordId,
          driver:  store().authReducer.user.driver_id, 
          startLocation: store().locationReducer.currentLocation, 
          currentLocation: store().locationReducer.currentLocation, 
          serviceType: req.body.serviceType, 
          city: req.body.city,                    
          status: req.body.status,
          socketId:''
        },
        options,
      )
      .then(res => {
        //console.log(res);
        if (res.status === 200) {
          //console.log(res.data);

          if (res.data.message === 'PHONE_VERIFIED') {
            //console.log('PHONE_VERIFIRD');
            dispatch(setPhoneVerified(true));
            dispatch(setUserData(res.data));
            navigation.navigate('SelectProduct');
         }
         if(res.data.message === 'INVALID_CODE'){
          //console.log("INVALID_PHONE_KEY");
          dispatch(setPhoneVerified(false));
          dispatch(setInvalidPhoneKey(res.data.message));
         }

        //  dispatch(uiLoadingComplete());

        }
      })
      .catch(error => {
        //console.log(error);
        //console.log('FAILED_JWT_VERIFY');

        // dispatch(uiLoadingComplete());
      });
      */
  };
}




  

export const checkMyJwtToken = (appName,token) => { 
  return new Promise(function (resolve, reject) { 
      const options = {
        headers: {
          'Content-Type': 'application/json',
          applicationName: appName,
          applicationKey: 'CHALAKPUBLICKEY',
          Authorization: token,
        },
      };
      axios
        .post(
          Endpoint.VERIFY_JWT,
          {
            role: 'DRIVER',
          },
          options,
        )
        .then( (response) => {
          var result = response.data; 
          //console.log('Processing Request'); 
          //console.log(result);
          if (response.status === 200) {
            if (result.message === 'SUCCESS') {
              //console.log('SUCCESS_LOGIN_MESSAGE');
              resolve(result); 

            }
          }
        },
        (error) => {
          //console.log('FAILED_JWT_VERIFY');
          reject(error); 
        });
      
  }); 
} 

/*
export const verifyInviteCode = (invitecode,appName) => {
  return new Promise(function (resolve, reject) { 
    // dispatch(uiLoadingStart());
const options = {
headers:{
  'Content-Type': 'application/json',
  'applicationName': appName,
  'applicationKey': 'CHALAKPUBLICKEY'
}
}
    axios.post(Endpoint.INVITE_CODE_VERIFICATION, {
      role:'DRIVER',
      inviteCode:invitecode
    }, options
    )
    .then(res => {
      if(res.status === 200){
        if(res.data.message === 'SUCCESS'){
          //console.log("INVITE_CODE_VERIFIED");
          resolve("VALID");
         }else{
          //console.log('INVITE_CODE_NOT_VERIFIED 1');
      reject("INVALID");
       }
        }
      //  dispatch(uiLoadingComplete());
      })
      .catch(error => {
        //console.log(error);
        //console.log('INVITE_CODE_NOT_VERIFIED 2');
        reject("INVALID");
      });
  
  });
};
*/

export const checkReferralCode = (invitecode,appName) => {
  return async (dispatch, store) => {
    let res = await verifyInviteCode(invitecode,appName);
    return res;
  }
}
export const verifyInviteCode = async(invitecode,appName) => {
 // let response;
 return new Promise(function (resolve) { 
    // dispatch(uiLoadingStart());
const options = {
headers:{
  'Content-Type': 'application/json',
  'applicationName': appName,
  'applicationKey': 'CHALAKPUBLICKEY'
}
}
    axios.post(Endpoint.INVITE_CODE_VERIFICATION, {
      role:'DRIVER',
      inviteCode:invitecode
    }, options
    )
    .then(res => {
      //console.log(res);
      if(res.status === 200){
        if(res.data.message === 'SUCCESS'){
          //console.log("INVITE_CODE_VERIFIED");
          // response ='VALID';
          resolve("VALID");
         }else{
          //console.log('INVITE_CODE_NOT_VERIFIED 1');
          // response = 'INVALID';
          resolve("INVALID");
       }
        }
      //  dispatch(uiLoadingComplete());
      })
      .catch(error => {
        //console.log(error);
        //console.log('INVITE_CODE_NOT_VERIFIED 2');
        // response = 'SERVER_ERROR';
        resolve("INVALID");
      });
 // return response;
});
};



export const loginWithEmailPasswordPost = (email,password) => {
  return new Promise(async(resolve, reject) => {
  // return async (dispatch, store) => {
    //console.log(email);
  //console.log(password);
    // dispatch(setUserLoginData({email:email,password:password}));
    // dispatch(uiLoadingStart());
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: 'Chalak',
        applicationKey: 'CHALAKPUBLICKEY',
      },
    };
   
			
    await axios
      .post(
        Endpoint.LOGIN_USER_EMAIL,
        {
          email: email,
          password: password,
          role: 'Driver',
        },
        options,
      )
      .then(res => {
        if (res.status === 200) {
          if (res.data.message === 'SUCCESS') {
            //console.log('SUCCESS_LOGIN_MESSAGE');
            resolve(res);
            // dispatch(setUserLogin(res.data));
            // dispatch(setCurrentEmail(res.data.email))
            // dispatch(setCurrentPhone(res.data.phone));
            // dispatch(setAsyncStorageJwtToken(res.data.token));
            // dispatch(uiLoadingComplete());
         //   navigation.navigate('Home');
          }
        }
      })
      .catch(error => {
        //console.log(error);
        //console.log('FAILED_LOGIN_MESSAGE');
        reject(error);
        
      //   dispatch(postDriverLoginFailure());
      //   dispatch(clearUserData());
      //  // dispatch(removeAsyncStorageJwtToken());
      //   dispatch(uiLoadingComplete());
      });
  // };
})
};