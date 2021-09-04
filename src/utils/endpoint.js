import { Platform } from 'react-native';
//const BASE_URI = Platform.OS === 'android' ? 'http://34.224.172.5' : 'http://gridecoreapp-env.peird25tbn.us-east-1.elasticbeanstalk.com';
//const  BASE_URI = "http://gridecoreapp-env.peird25tbn.us-east-1.elasticbeanstalk.com";
//const  BASE_URI = "http://127.0.0.1:9500";
//const BASE_URI = "http://localhost:9500";
const BASE_URI = Platform.OS === 'android' ? 'http://10.0.2.2:9500' : 'http://localhost:9500';

const Endpoint = {
    BASE_URL: BASE_URI,
    //BASE_SOCKETIO_URI: BASE_URI,
    BASE_SOCKETIO_URI : 'http://192.168.2.6:9500',
    VERIFY_JWT: BASE_URI+"/auth/customer/verify/jwt",
    SIGNUP_CUSTOMER_STEP_ONE: BASE_URI+"/auth/customer/signup",
    INVITE_CODE_VERIFICATION: BASE_URI+"/referral/verify/customer",
    GO_ONLINE:BASE_URI+"/driver/status/driverLocationSocket",
    // USER_LOOKUP: BASE_URI+"/user/login/customer",
    // USER_LOOKUPS: BASE_URI+"/customer/login",
    // VERIFY_PHONE: BASE_URI+"/customer/login",
    // CHECK_ACCOUNT_STATUS: "Enter your mobile number",
    // TEST_RIA:  BASE_URI+"/customer/login/phone",
    POST_DEVICE_INFO: BASE_URI+"/deviceinfo",
    GET_DEVICE_DATA: BASE_URI+"/app-setup/chalak",
    TEST_URL: "https://facebook.github.io/react-native/movies.json",
    LOGIN_USER_EMAIL: BASE_URI+"/auth/customer/login",
    UPDATE_PHONE:BASE_URI+"/auth/driver/otp",
    VERIFY_PHONE_OTP: BASE_URI+"/auth/driver/otp/verify",
    INITIAL_PHONE_OTP_VERIFY: BASE_URI+"/auth/customer/otp/verification",
    GET_VEHICLE_BY_DRIVER: BASE_URI+"/vehicles/driver/",
    ADD_NEW_VEHICLE:BASE_URI+"/vehicles",
    GET_DRIVER_ADDRESS:  BASE_URI+"/user/address",
    SET_DEFAULT_VEHICLE:  BASE_URI+"/vehicles/setdefault/",
    GET_AVAILABLE_PRODUCT:  BASE_URI+"/products/available-product",
    GET_OPERATING_CITIES: BASE_URI+"/cities",
    GET_TRANSACTION_DETAILS: BASE_URI+"/transaction/details/",
    GET_TRANSACTION_LIST: BASE_URI+"/transaction/details/5f66f113d0d7540db3bf54a9",
    GET_PROVINCE: BASE_URI+"/provinces",
    GET_DISTRICT: BASE_URI+"/districts",
    GET_MUNICIPALITIES: BASE_URI+"/municipalities",
    GET_WEEKLY_TRANSACTION:BASE_URI+"/transaction/weekly/driver/",
    FORGOT_PASSWORD_EMAIL:BASE_URI+"/auth/driver/forgot-password/email",
    GET_REFERRAL_HISTORY: BASE_URI+"/referral/driver/history/",
    GET_WEEKLY_TRIP:BASE_URI+"/trips/weekly/driver/",
    POST_DRIVER_PRODUCT_ASSOCIATION:BASE_URI+"/auth/driver/select-product",
    GET_TRIP_DETAILS:BASE_URI+"/trips/detail/",
    GET_REQUIRED_DOCUMENTS_AUTH_ROUTE: BASE_URI+"/setting/document/product/",
    GET_REQUIRED_DOCUMENTS_ACCOUNT_ROUTE: BASE_URI+"/setting/document/driver/",
    GET_USER_PROFILE_INFORMATION: BASE_URI+"/user/profile/customer/",
    GET_BANK_LIST_BY_COUNTRY: BASE_URI+"/bank/country/",
    GET_BANNK_BRANCH_LIST: BASE_URI+"/bank/bank-address/branch/",
    SET_DRIVER_PROFILE_ADDRESS: BASE_URI+"/user/profile/driver/address/",
    UPDATE_DRIVER_EMAIL_ADDRESS:BASE_URI+"/user/profile/driver/email/",
    GET_WEEKLY_EARNING_SUMMARY:BASE_URI+"/transaction/weekly-earning/summary/driver/",
    UPDATE_DRIVER_CURRENT_PHONE:BASE_URI+"/user/profile/driver/phone/",
    //EATS
    GET_BUSINESS_CATEGORY:BASE_URI+"/business/category",
    GET_HOME_BANNER:BASE_URI+"/business/home-banner/",
    GET_HOME_PRODUCT_TAG:BASE_URI+"/business/product-tag/",
    GET_BUSINESS_BY_CATEGORY:BASE_URI+"/business/retail/find/category/",
    GET_FASTEST_NEAR_YOU:BASE_URI+"/business/retailer/find/fastest/",
    GET_ZERO_DELIVERY_NEAR_YOU: BASE_URI+"/business/retailer/find/zero-delivery/",
    GET_MOST_POPULAR_NEAR_YOU: BASE_URI+"/business/retailer/find/most-popular/",
    GET_NOW_ON_SAAYOG_NEAR_YOU: BASE_URI+"/business/retailer/find/now-on-saayog/",
    GET_BUSINESS_LOCATION_DETAILS: BASE_URI+"/business/business-location/",
    GET_NEARBY_HOME_KITCHEN_MENU_ITEM: BASE_URI+"/business/retailer/find/home-based/",
    GET_RETAIL_MENU_ITEM_DETAILS: BASE_URI+"/business/retailer-menu-item/",
    
    GET_RETAIL_LOCATION_DETAILS: BASE_URI+"/business/retailer-location/",
    GET_FASTEST_RETAIL_NEAR_YOU:BASE_URI+"/business/retailer/find/fastest/",
    GET_WISHLIST_FOR_USER: BASE_URI+"/customer/wish-list/",
    GET_LAST_DELIVERY_ADDRESS: BASE_URI+"/user/profile/customer/",
    GET_CUSTOMER_DELIVERY_ADDRESS: BASE_URI+"/member/customer/delivery-address/",
    POST_CUSTOMER_DELIVERY_ADDRESS: BASE_URI+"/customer/delivery-address/",
    PUT_CUSTOMER_DELIVERY_ADDRESS: BASE_URI+"/customer/delivery-address/",

        
    GET_MENU_ITEM_DETAILS: BASE_URI+"/business/retailer-menu-item/",
    SHOPPING_CART: BASE_URI+"/shopping-cart/",
    GET_GIFTED_TO: BASE_URI+"/gifted-to/",
    GET_DELIVERY_ADDRESS: BASE_URI+"/customer/delivery-address/customer/",
};

export default Endpoint;
/*
"react-navigation": "^4.0.10",
"react-navigation-drawer": "^2.3.3",
"react-navigation-stack": "^1.10.3",
"react-navigation-tabs": "^2.5.6",
*/