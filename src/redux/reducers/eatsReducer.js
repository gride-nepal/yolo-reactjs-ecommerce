import {
    GET_FASTEST_NEAR_YOU, GET_HOME_BANNER, GET_BUSINESS_CATEGORY,
    GET_MOST_POPULAR_NEAR_YOU, SELECTED_CATEGORY, GET_FASTEST_GROCERY_NEAR_YOU,
    GET_HOME_PRODUCT_TAG, GET_ZERO_DELIVERY_NEAR_YOU, GET_STORE_DETAILS, GET_NOW_ONE_SAAYOG_NEAR_YOU,
    GET_NEARBY_HOME_KITCHEN, GET_AVAILABLE_MENU, GET_SELECTED_MENU,
    GET_FEATURED_ITEMS, GET_CURRENT_STORE_OFFER, GET_SHOPPING_CART,
    GET_TODAYS_FIRST_ADVERTS, GET_TODAYS_SECOND_ADVERTS, GET_TODAYS_THIRD_ADVERTS,
    GET_TODAYS_FOURTH_ADVERTS, GET_MENU_ITEM_DETAILS, GET_STORE_BY_CUSINE_CATEGORY,
    GET_USER_WISH_LIST_ITEM, GET_FAV_BUSINESS, GET_LAST_DELIVERY_ADDRESS,
    GET_USER_WISH_LIST_RETAILER, GET_GIFT_DETAILS, GET_PICKUP, GET_ORDER_RECEIPT,
    GET_SEARCH_RESULT
} from '../actions/types';

const initialState = {
    fasterStoreNearYou: [],
    favBusinessNearYou: [],
    zeroDeliveryStoreNearYou: [],
    homeBanner: [],
    businessCategory: [],
    selectedCategory: '5fbd6babf466b118cf5e7e5b',
    homeScreenProductTag: [],
    mostPopularStoreNearYou: [],
    nowOnSaayogStoreNearYou: [],
    fasterGroceryStoreNearYou: [],
    homeKitchenNearYou: [],
    selectedStore: null,
    selectedMenu: null,
    availableMenu: [],
    featuredItems: [],
    currentStoreOffer: [],
    shoppingCart: null,
    orderReceipt: null,
    advertisements: { first: [], second: [], third: [], fourth: [] },
    menuItem: null,
    wishListRetailer: [],
    wishListItem: [],
    giftDetails: { sendTo: '', phone: '', giftMessage: '', from: '', agreeToTerms: false },
    pickup: [],
    lastDeliveryAddress: null,
    storeListByCusineOrCategory: [],
    searchResult:[],
    topCusine:[],
    moreCusine: []
};

const eatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAV_BUSINESS:
            return { ...state, favBusinessNearYou: action.payload };
        case GET_FASTEST_NEAR_YOU:
            return { ...state, fasterStoreNearYou: action.payload };
        case GET_HOME_BANNER:
            return { ...state, homeBanner: action.payload };
        case GET_BUSINESS_CATEGORY:
            return { ...state, businessCategory: action.payload };
        case GET_HOME_PRODUCT_TAG:
            return { ...state, homeScreenProductTag: action.payload };
        case GET_ZERO_DELIVERY_NEAR_YOU:
            return { ...state, zeroDeliveryStoreNearYou: action.payload };
        case GET_MOST_POPULAR_NEAR_YOU:
            return { ...state, mostPopularStoreNearYou: action.payload };
        case GET_STORE_DETAILS:
            return { ...state, selectedStore: action.payload };
        case SELECTED_CATEGORY:
            return { ...state, selectedCategory: action.payload };
        case GET_NOW_ONE_SAAYOG_NEAR_YOU:
            return { ...state, nowOnSaayogStoreNearYou: action.payload };
        case GET_FASTEST_GROCERY_NEAR_YOU:
            return { ...state, fasterGroceryStoreNearYou: action.payload };
        case GET_NEARBY_HOME_KITCHEN:
            return { ...state, homeKitchenNearYou: action.payload };
        case GET_SELECTED_MENU:
            return { ...state, selectedMenu: action.payload };
        case GET_AVAILABLE_MENU:
            return { ...state, availableMenu: action.payload };
        case GET_FEATURED_ITEMS:
            return { ...state, featuredItems: action.payload };
        case GET_CURRENT_STORE_OFFER:
            return { ...state, currentStoreOffer: action.payload };
        case GET_SHOPPING_CART:
            return { ...state, shoppingCart: action.payload }
        case GET_TODAYS_FIRST_ADVERTS:
            return { ...state, advertisements: { first: action.payload } };
        case GET_TODAYS_SECOND_ADVERTS:
            return { ...state, advertisements: { second: action.payload } };
        case GET_TODAYS_THIRD_ADVERTS:
            return { ...state, advertisements: { third: action.payload } };
        case GET_TODAYS_FOURTH_ADVERTS:
            return { ...state, advertisements: { fourth: action.payload } };
        case GET_MENU_ITEM_DETAILS:
            return { ...state, menuItem: action.payload };
        case GET_USER_WISH_LIST_RETAILER:
            return { ...state, wishListRetailer: action.payload };
        case GET_USER_WISH_LIST_ITEM:
            return { ...state, wishListItem: action.payload };
        case GET_GIFT_DETAILS:
            return { ...state, giftDetails: action.payload };
        case GET_PICKUP:
            return { ...state, pickup: action.payload };
        case GET_ORDER_RECEIPT:
            return { ...state, orderReceipt: action.payload };
        case GET_LAST_DELIVERY_ADDRESS:
            return { ...state, lastDeliveryAddress: action.payload };
        case GET_STORE_BY_CUSINE_CATEGORY:
            return { ...state, storeListByCusineOrCategory: action.payload };
        case GET_SEARCH_RESULT:
            return {...state,searchResult: action.payload};
        default:
            return state;
    }
};

export default eatsReducer;