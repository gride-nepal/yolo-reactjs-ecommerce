import {
  GET_HOME_BANNER, GET_BUSINESS_CATEGORY, GET_ZERO_DELIVERY_NEAR_YOU,
  GET_MOST_POPULAR_NEAR_YOU, GET_FASTEST_GROCERY_NEAR_YOU,
  GET_HOME_PRODUCT_TAG, GET_FASTEST_NEAR_YOU, GET_NOW_ONE_SAAYOG_NEAR_YOU,
  GET_STORE_DETAILS, SELECTED_CATEGORY, GET_NEARBY_HOME_KITCHEN,
  GET_FEATURED_ITEMS, GET_AVAILABLE_MENU, GET_SELECTED_MENU, GET_STORE_BY_CUSINE_CATEGORY,
  GET_CURRENT_STORE_OFFER, GET_SHOPPING_CART, GET_TODAYS_FIRST_ADVERTS, GET_TODAYS_SECOND_ADVERTS, GET_TODAYS_THIRD_ADVERTS,
  GET_TODAYS_FOURTH_ADVERTS, GET_FAV_BUSINESS, GET_LAST_DELIVERY_ADDRESS,
  GET_MENU_ITEM_DETAILS, GET_USER_WISH_LIST_ITEM, GET_USER_WISH_LIST_RETAILER, 
  GET_GIFT_DETAILS, GET_PICKUP, GET_ORDER_RECEIPT, GET_RETAILER, GET_RETAILER_HOURS,
  GET_SEARCH_RESULT
} from './types';
import Endpoint from '../../util/endpoint';
import axios from 'axios';
import instance from '../../util/axiosRequest';

export const setLastDeliveryAddress = deliveryAddress => ({
  type: GET_LAST_DELIVERY_ADDRESS,
  payload: deliveryAddress
})

export const getBusinessCategory = businessCategory => ({
  type: GET_BUSINESS_CATEGORY,
  payload: businessCategory
})

export const setSelectedCategory = selectedCategory => ({
  type: SELECTED_CATEGORY,
  payload: selectedCategory
})

export const getHomeBanner = homeBanner => ({
  type: GET_HOME_BANNER,
  payload: homeBanner
});

export const getHomeProductTag = productTagList => ({
  type: GET_HOME_PRODUCT_TAG,
  payload: productTagList
})

export const getFastestNearYou = business => ({
  type: GET_FASTEST_NEAR_YOU,
  payload: business
});

export const getZeroDeliveryNearYou = business => ({
  type: GET_ZERO_DELIVERY_NEAR_YOU,
  payload: business
})


export const getMostPopularNearYou = business => ({
  type: GET_MOST_POPULAR_NEAR_YOU,
  payload: business
})

export const getNowOnSaayogNearYou = business => ({
  type: GET_NOW_ONE_SAAYOG_NEAR_YOU,
  payload: business
})

export const getFastestGroceryNearYou = business => ({
  type: GET_FASTEST_GROCERY_NEAR_YOU,
  payload: business
});

export const getHomeKitchenNearYou = homeKitchen => ({
  type: GET_NEARBY_HOME_KITCHEN,
  payload: homeKitchen
})

export const getFavBusinessNearYou = favBusiness => ({
  type: GET_FAV_BUSINESS,
  payload: favBusiness
})

export const getStoreListByCusineOrCategory = storeListByCusineOrCategory => ({
  type: GET_STORE_BY_CUSINE_CATEGORY,
  payload: storeListByCusineOrCategory
})

export const getStoreDetails = store => ({
  type: GET_STORE_DETAILS,
  payload: store
});

export const getFeaturedItems = featuredItems => ({
  type: GET_FEATURED_ITEMS,
  payload: featuredItems
})

export const getCurrentStoreOffer = offerList => ({
  type: GET_CURRENT_STORE_OFFER,
  payload: offerList
});

export const getAvailableMenu = menuList => ({
  type: GET_AVAILABLE_MENU,
  payload: menuList
});

export const getSelectedMenu = menu => ({
  type: GET_SELECTED_MENU,
  payload: menu
});

export const getShoppingCart = cart => ({
  type: GET_SHOPPING_CART,
  payload: cart
});

export const getOrderReceipt = receipt => ({
  type: GET_ORDER_RECEIPT,
  payload: receipt
});

export const getSearchResult = result => ({
  type: GET_SEARCH_RESULT,
  payload: result
});

export const getTodaysFirstAdvertisements = advertisements => ({
  type: GET_TODAYS_FIRST_ADVERTS,
  payload: advertisements
});
export const getTodaysSecondAdvertisements = advertisements => ({
  type: GET_TODAYS_SECOND_ADVERTS,
  payload: advertisements
});
export const getTodaysThirdAdvertisements = advertisements => ({
  type: GET_TODAYS_THIRD_ADVERTS,
  payload: advertisements
});
export const getTodaysFourthAdvertisements = advertisements => ({
  type: GET_TODAYS_FOURTH_ADVERTS,
  payload: advertisements
});


export const getMenuItemDetails = (menuItem) => ({
  type: GET_MENU_ITEM_DETAILS,
  payload: menuItem
});

export const getWishListRetailer = wishListRetailer => ({
  type: GET_USER_WISH_LIST_RETAILER,
  payload: wishListRetailer
})

export const getWishListItem = wishListItem => ({
  type: GET_USER_WISH_LIST_ITEM,
  payload: wishListItem
})

export const getGiftDetails = giftDetails => ({
  type: GET_GIFT_DETAILS,
  payload: giftDetails
})

export const getPickup = pickup => ({
  type: GET_PICKUP,
  payload: pickup
})

export const getRetailer = retailer => ({
  type: GET_RETAILER,
  payload: retailer
})

export const getRetailerHours = retailerHours => ({
  type: GET_RETAILER_HOURS,
  payload: retailerHours
})

export const getStoreDetailsWithMenu = (storeid) => {
  return async (dispatch, store) => {
    // dispatch(uiLoadingStart());
    await axios
      .get(
        Endpoint.GET_BUSINESS_LOCATION_DETAILS + storeid
      )
      .then(res => {
        if (res.status === 200) {
          dispatch(getStoreDetails(res.data));
        }
      })
      .catch(error => {
        dispatch(getStoreDetails(null));
      });
  };
};

export const changeMenu = (menuId) => {
  return async (dispatch, store) => {
    // dispatch(uiLoadingStart());
    var newMenu = await store().eatsReducer.availableMenu.filter(menu => {
      return menu._id == menuId;
    });
    if (newMenu != undefined) {
      dispatch(getSelectedMenu(newMenu[0]));
    }


  }
};

export const getTodaysAdverts = (category, location) => {
  return async (dispatch, store) => {
    const responseData = [{
      "_id": "605041132fb2f2abcff96c98",
      "priority": 1,
      "advertType": "Store",
      "description": "Details about ads",
      "identifier": "605041132fb2f2abcff96c76",
      "banner": [{
        "_id": "123",
        "image": "https://s3.envato.com/files/236189289/jpg/3-1200x628.jpg"
      }],
      "startDate": "2020-10-16",
      "endDate": "2021-12-16",
      "offer": "Buy One, Get One Free until 12/16",
      "enabled": true,
      "businessCategory": {
        "id": "",
        "name": "",
      },
      "hasLocation": true,
      "storeLocation": {
        "type": "Point",
        "coordinates": [199.98, -82.87]
      }

    },
    {
      "_id": "605041132fb2f2abcff96c28",
      "priority": 0,
      "advertType": "Store",
      "description": "Details about ads",
      "identifier": "605041132fb2f2abcff96c76",
      "banner": [{
        "_id": "123",
        "image": "https://s3.envato.com/files/236189289/jpg/3-1200x628.jpg"
      }, {
        "_id": "456",
        "image": "https://s3.envato.com/files/236189289/jpg/3-1200x628.jpg"
      }],
      "startDate": "2020-10-16",
      "endDate": "2021-12-16",
      "offer": "Buy One, Get One Free until 12/16",
      "enabled": true,
      "businessCategory": {
        "id": "",
        "name": "",
      },
      "hasLocation": true,
      "storeLocation": {
        "type": "Point",
        "coordinates": [199.98, -82.87]
      }

    },
    {
      "_id": "605041132fb2f2abcff96c48",
      "priority": 2,
      "advertType": "Store",
      "description": "Details about ads",
      "identifier": "605041132fb2f2abcff96c76",
      "banner": [{
        "_id": "123",
        "image": "https://s3.envato.com/files/236189289/jpg/3-1200x628.jpg"
      }],
      "startDate": "2020-10-16",
      "endDate": "2021-12-16",
      "offer": "Buy One, Get One Free until 12/16",
      "enabled": true,
      "businessCategory": {
        "id": "",
        "name": "",
      },
      "hasLocation": true,
      "storeLocation": {
        "type": "Point",
        "coordinates": [199.98, -82.87]
      }

    }];

    dispatch(getTodaysFirstAdvertisements(responseData));
    dispatch(getTodaysSecondAdvertisements(responseData));
    dispatch(getTodaysThirdAdvertisements(responseData));
    dispatch(getTodaysFourthAdvertisements(responseData));

  }
}

export const getStoreDetailsWithMenus = (storeid) => {
  return async (dispatch, store) => {

    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
        'Authorization': store().authReducer.token
      },
    };
    const responseData = await instance
      .get(
        Endpoint.GET_RETAIL_LOCATION_DETAILS + storeid,
        options,
      );
    var storeRetail = null;
    var storeRetailHours = [];
    var storeRetailMenu = [];
    // var storeRetailCourses = [];
    // var storeRetailMenuItem = [];
    var featuredItems = [];
    var currentStoreOffer = [];
    if (responseData.status === 200) {
      if (responseData.data.message === "SUCCESS") {
        console.log('FETCHED STORE LOCATION');
        console.log("=============");
        console.log(responseData);
        console.log("=============");

        storeRetail = responseData.data.data;
        storeRetailHours = responseData.data.data.retailHour;
        storeRetailMenu = responseData.data.data.retailMenu;
        // storeRetailCourses = responseData.data.data.retailCourses;
        // storeRetailMenuItem = responseData.data.data.retailMenuItem;
        storeFeaturedItems = responseData.data.data.featuredItem;
        storeCurrentStoreOffer = responseData.data.data.offer;


        console.log(storeRetail);
        console.log(storeRetailHours);
        dispatch(getStoreDetails(storeRetail));
        dispatch(getRetailerHours(storeRetailHours));
        dispatch(getAvailableMenu(storeRetailMenu));
        dispatch(getSelectedMenu(storeRetailMenu[0]));
        dispatch(getFeaturedItems(storeFeaturedItems));
        dispatch(getCurrentStoreOffer(storeCurrentStoreOffer));
      }
    }

    /*  const timeNow = currentTime();   
    var numberOfMenu = responseData.retailMenu.length;
    //alert(numberOfMenu);
    if(numberOfMenu > 0){
      var i=1;
      await responseData.retailMenu.map((menu) => {
        var openAt = timeConversion(menu.servingStartTime);
        var closeAt = timeConversion(menu.servingEndTime);
        if(timeNow >= openAt && timeNow <= closeAt && i ==1){ 
          i++;
         
          dispatch(getSelectedMenu(menu));
        }
      })
    }else{
  
    } 
   */
  };
};

export const getWishListForUser = () => {
  return async (dispatch, store) => {
    let customerId = await store().authReducer.user.customer_id;
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
        'Authorization': store().authReducer.token
      },
    };
    const response = await instance
      .get(
        Endpoint.GET_WISHLIST_FOR_USER + customerId,
        // options,
      );


    if (response.status === 200) {
      if (response.data.message === "SUCCESS") {
        console.log('FETCHED WISHLIST');
        var wishListRetailLocation = [];
        var wishListMenuItem = [];
        if (response.data.count > 0) {
          response.data.data.forEach(wl => {
            if (wl.type === "MenuItem") {
              console.log('PUSHED WISHLIST ITEM');
              wishListMenuItem.push(wl);
            }
            if (wl.type === "RetailLocation") {
              console.log('PUSHED WISHLIST LOCATION');
              wishListRetailLocation.push(wl);
            }
          })
        }
        console.log(wishListRetailLocation);
        console.log(wishListMenuItem);
        dispatch(getWishListRetailer(wishListRetailLocation));
        dispatch(getWishListItem(wishListMenuItem));
      }
    }
    return response.data;
  }
}

export const postWishListForUser = (identifier, type) => {
  return async (dispatch, store) => {
    let customerId = await store().authReducer.user.customer_id;
    console.log("CUSTOMER ID FROM STORE======" + customerId);
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
        'Authorization': store().authReducer.token
      },
    };
    await axios
      .post(
        Endpoint.GET_WISHLIST_FOR_USER + customerId,
        {
          "identifier": identifier,
          "type": type
        },
        options,
      )
      .then(res => {
        if (res.status === 200) {
          if (res.data.message === "SUCCESS") {
            console.log('FETCHED WISHLIST');
            var wishListRetailLocation = [];
            var wishListMenuItem = [];
            if (res.data.count > 0) {
              res.data.data.forEach(wl => {
                if (wl.type === "MenuItem") {
                  console.log('PUSHED WISHLIST ITEM');
                  wishListMenuItem.push(wl);
                }
                if (wl.type === "RetailLocation") {
                  console.log('PUSHED WISHLIST LOCATION');
                  wishListRetailLocation.push(wl);
                }
              })
            }
            console.log(wishListRetailLocation);
            console.log(wishListMenuItem);
            dispatch(getWishListRetailer(wishListRetailLocation));
            dispatch(getWishListItem(wishListMenuItem));
          }
        }
      })
      .catch(error => {
        // dispatch(getFastestNearYou([]));
        console.log('ADD WISHLIST FAILED');
        console.log(error);
      });

  }
}

export const postWishListForUsers = (identifier, type) => {
  return async (dispatch, store) => {
    let customerId = await store().authReducer.user.customer_id;
    console.log("CUSTOMER ID FROM STORE======" + customerId);
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
        'Authorization': store().authReducer.token
      },
    };
    const response = await instance.post(
      Endpoint.GET_WISHLIST_FOR_USER + customerId,
      {
        "identifier": identifier,
        "type": type
      },
      //options,
    );
    if (response.status === 200) {
      if (response.data.message === "SUCCESS") {
        console.log('FETCHED WISHLIST');
        var wishListRetailLocation = [];
        var wishListMenuItem = [];
        if (response.data.count > 0) {
          response.data.data.forEach(wl => {
            if (wl.type === "MenuItem") {
              console.log('PUSHED WISHLIST ITEM');
              wishListMenuItem.push(wl);
            }
            if (wl.type === "RetailLocation") {
              console.log('PUSHED WISHLIST LOCATION');
              wishListRetailLocation.push(wl);
            }
          })
        }
        console.log(wishListRetailLocation);
        console.log(wishListMenuItem);
        dispatch(getWishListRetailer(wishListRetailLocation));
        dispatch(getWishListItem(wishListMenuItem));
      }

    }
    return response.data;
  }
}

export const getMenuItemDetailsById = (menuItemId) => {
  return async (dispatch, store) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
        'Authorization': store().authReducer.token
      },
    };

    const responseData = await instance
      .get(
        Endpoint.GET_MENU_ITEM_DETAILS + menuItemId,
        options,
      );
    var storeRetailMenuItem = [];
    if (responseData.status === 200) {
      if (responseData.data.message === "SUCCESS") {
        console.log('FETCHED MENU ITEM');
        console.log("=============");
        console.log(responseData);
        console.log("=============");

        // storeRetail = responseData.data.data;
        // storeRetailHours = responseData.data.data.retailHour;
        // storeRetailMenu = responseData.data.data.retailMenu;
        // storeRetailCourses = responseData.data.data.retailCourse;
        // storeRetailMenuItem = storeRetailMenu.retailCourse.retailMenuItem;
        // storeFeaturedItems = responseData.data.data.featuredItem;
        // storeCurrentStoreOffer = responseData.data.data.offer;

        storeRetailMenuItem = responseData.data.data;

        //dispatch(getRetailMenuItem(storeRetailMenuItem));
        dispatch(getMenuItemDetails(storeRetailMenuItem));
      }
    }
  };

  


  // const responseData = {
  //   "_id": "6024a81e36ba9d1f35934523",
  //   "itemType": ["5fbd6babf466b118cf5e7e5b"],
  //   "isEnabled": true,
  //   "name": "Hot & Spicy Chicken Sandwiches",
  //   "slug": "steamed-chicken-momo",
  //   "menu": "600fb048c0ff7a47f065865e",
  //   "course": "60105135209e3b3dd437c6f3",
  //   "image": "https://hhp-blog.s3.amazonaws.com/2019/07/burger-640x448.jpg",
  //   "prepTime": "14",
  //   "description": "Hand-rubbed fresh chicken breast smoked over local hickory wood, and pulled to order",
  //   "priceNow": 150,
  //   "priceWas": 19,
  //   "spiceLevel": "5",
  //   "metaTagTitle": "meta title goes here",
  //   "metaTagDescription": "Meta Description",
  //   "metaTagKeyword": "Meta keywords",
  //   "status": "Active",
  //   "addedBy": "Admin",
  //   "updatedAt": "2021-02-11T03:44:30.043Z",
  //   "createdAt": "2021-02-11T03:44:30.043Z",
  //   "__v": 0,
  //   "servingSize": 1,
  //   "calories": "530 - 1070",
  //   "ingridents": [{
  //     "_id": "600fb048c0ff7a47f065865f",
  //     "name": "Chicken White Meats"
  //   },
  //   {
  //     "_id": "600fb048c0ff7a47f065864f",
  //     "name": "Onions"
  //   },
  //   {
  //     "_id": "600fb048c0ff7a47f065868f",
  //     "name": "Tomatoes"
  //   }],
  //   "menuItemOption": [{
  //     "_id": "1024a81e36ba9d1f35934823",
  //     "isRequired": true,
  //     "name": "Select Bun Option",
  //     "minOption": 1,
  //     "maximumOption": 1,
  //     "options": [{
  //       "_id": "6024a11e36ba9d1f35934823",
  //       "optionValue": "Toasted Bun (2pcs)",
  //       "addOrSubtract": "add",
  //       "price": 20
  //     },
  //     {
  //       "_id": "6026a81e36ba9d1f35934823",
  //       "optionValue": "Toasted Bun (4pcs)",
  //       "addOrSubtract": "subtract",
  //       "price": 30
  //     },
  //     {
  //       "_id": "6024a71e36ba9d1f35934823",
  //       "optionValue": "Toasted Bun (6pcs)",
  //       "addOrSubtract": "add",
  //       "price": 40
  //     }]
  //   },
  //   {
  //     "_id": "6024a81e36ba9d1f35944823",
  //     "isRequired": false,
  //     "name": "Sauce On the Side Options",
  //     "minOption": 2,
  //     "maximumOption": 2,
  //     "options": [{
  //       "_id": "6024a81e36ba9d1f35934283",
  //       "optionValue": "Ranch",
  //       "addOrSubtract": "add",
  //       "price": 5
  //     },
  //     {
  //       "_id": "6924a81e36ba9d1f35934823",
  //       "optionValue": "Hot Sauce",
  //       "addOrSubtract": "add",
  //       "price": 5
  //     },
  //     {
  //       "_id": "6024a81e96ba9d1f35934823",
  //       "optionValue": "Ketchup",
  //       "addOrSubtract": "add",
  //       "price": 5
  //     }]
  //   },
  //   ],
  //   "frequentlyBoughtTogether": [{
  //     "_id": "6024a81e36ba9d1f35934823",
  //     "itemType": ["5fbd6babf466b118cf5e7e5b"],
  //     "isEnabled": true,
  //     "name": "Steamed Chicken Momo",
  //     "slug": "steamed-chicken-momo",
  //     "menu": "600fb048c0ff7a47f065865e",
  //     "course": "60105135209e3b3dd437c6f3",
  //     "image": "https://saayog-test-bucket.s3.amazonaws.com/menuItem/1613015069845.png",
  //     "prepTime": "14",
  //     "description": "menu item description goes here",
  //     "priceNow": 105,
  //     "priceWas": 119,
  //     "spiceLevel": "5",
  //     "metaTagTitle": "meta title goes here",
  //     "metaTagDescription": "Meta Description",
  //     "metaTagKeyword": "Meta keywords",
  //     "status": "Active",
  //     "addedBy": "Admin",
  //     "updatedAt": "2021-02-11T03:44:30.043Z",
  //     "createdAt": "2021-02-11T03:44:30.043Z",
  //     "__v": 0,
  //   },
  //   {
  //     "_id": "6024a81e36ba9d1f35934593",
  //     "itemType": ["5fbd6babf466b118cf5e7e5b"],
  //     "isEnabled": true,
  //     "name": "Steamed Veg Momo",
  //     "slug": "steamed-chicken-momo",
  //     "menu": "600fb048c0ff7a47f065865e",
  //     "course": "60105135209e3b3dd437c6f3",
  //     "image": "https://saayog-test-bucket.s3.amazonaws.com/menuItem/1613015069845.png",
  //     "prepTime": "14",
  //     "description": "menu item description goes here",
  //     "priceNow": 160,
  //     "priceWas": 190,
  //     "spiceLevel": "5",
  //     "metaTagTitle": "meta title goes here",
  //     "metaTagDescription": "Meta Description",
  //     "metaTagKeyword": "Meta keywords",
  //     "status": "Active",
  //     "addedBy": "Admin",
  //     "updatedAt": "2021-02-11T03:44:30.043Z",
  //     "createdAt": "2021-02-11T03:44:30.043Z",
  //     "__v": 0,
  //   }
  //   ]
  // };
};

export const addToCart = (menuItemId, qty, retailLocationId, instruction, shoppingCartId, override) => {
  return async (dispatch, store) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
        'Authorization': store().authReducer.token
      },
    };
    const response = await instance
    .post(
      Endpoint.SHOPPING_CART+'add-to-cart/' + store().authReducer.user.customer_id,
      {
        retailMenuItem : menuItemId,
        qty : qty,
        retailLocation : retailLocationId,
        instruction : instruction,
        shoppingCart : shoppingCartId,
        override : override
      },
      options,
    );
    console.log();
    if (response.status === 200) {
      if (response.data.message === "SUCCESS") {
        dispatch(getShoppingCart(response.data.data));
      }
    }
    return response.data;
  }
}

export const getUserCart = () => {
  return async (dispatch, store) => {
    //SHOPPING_CART+'customer/'+store().authReducer.customer_id;
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
        'Authorization': store().authReducer.token
      },
    };

    const responseData = await instance
      .get(
        Endpoint.SHOPPING_CART+'customer/'+store().authReducer.user.customer_id,
        options,
      );
    var shoppingCart = null;
    if (responseData.status === 200) {
      if (responseData.data.message === "SUCCESS") {
        console.log('FETCHED SHOPPING CART ITEM');
        console.log("=============");
        console.log(responseData.data.data);
        console.log("=============");

        shoppingCart = responseData.data.data;
        dispatch(getShoppingCart(shoppingCart));
        return shoppingCart;
      }

    // const responseData = {
    //   "_id": "6010e055b2d6aa29dc2e3698",
    //   "user_id": "6010e055b2d6aa29dc2e3735",
    //   "cartItem": [{
    //     "_id": "6010e055b2d6aa29dc2e3239",
    //     "qty": 2,
    //     "menuItem": {
    //       "_id": "6024a81e36ba9d1f35934523",
    //       "name": "Steamed Chicken Momo",
    //       "priceNow": 100.00,
    //       "priceWas": 119.00,
    //     },
    //     "price": 100.00,
    //     "subTotal": 200.00,
    //     "discount": 30.50,
    //     "instruction": "well done",
    //     "selectedOption": "None",
    //   }, {
    //     "_id": "6010e055b2d6aa29dc2e3640",
    //     "qty": 2,
    //     "menuItem": {
    //       "_id": "6024a81e36ba9d1f35934523",
    //       "name": "Steamed Buff Momo",
    //       "priceNow": 100.00,
    //       "priceWas": 119.00,
    //     },
    //     "price": 100.00,
    //     "subTotal": 200.00,
    //     "discount": 30.50,
    //     "instruction": "well done",
    //     "selectedOption": "None",
    //   },
    //   ],
    //   "totalItem": 3,
    //   "promoCode": "10FREE",
    //   "lastUpdated": "2021-04-24",
    //   "retailLocation": {
    //     "_id": "60483ee67df335810bf771f7",
    //     "streetAddress": "65 Amar Path",
    //     "municipality": {
    //       "_id": "2334",
    //       "name": "Butwal"
    //     },
    //     "district": {
    //       "_id": "2334",
    //       "name": "Rupandehi"
    //     },
    //     "province": {
    //       "_id": "2334",
    //       "name": "Province 5"
    //     },
    //     "retailer": {
    //       "_id": "60483ee67df335810bf771f7",
    //       "name": "My Friends Cafe & Bar",

    //     },
    //   },
    //   "subTotal": 250.00,
    //   "discount": 30.50,
    //   "deliveryFee": 5.50,
    //   "serviceFee": 10.00,
    //   "localFee": 2.00,
    //   "taxes": 20.00,
    //   "total": 257.00,
    //   "businessCategory": {
    //     "_id": "60483ee67df335810bf771f7",
    //     "name": "Restaurant"
    //   },
    //   "deliveryAddress": {
    //     "_id": "60483ee67df335810bf771f7",
    //     "name": "My Friends Cafe & Bar",
    //     "streetAddress": "65 Amar Path",
    //     "municipality": {
    //       "_id": "2334",
    //       "name": "Butwal"
    //     },
    //     "district": {
    //       "_id": "2334",
    //       "name": "Rupandehi"
    //     },
    //     "province": {
    //       "_id": "2334",
    //       "name": "Province 5"
    //     },
    //     "deliveryOption": {
    //       "option": "Leave at door",
    //       "instruction": "Ring a door bell"
    //     },
    //   },
    //   "deliveryTime": "45-55 min",
    //   "deliveryMethod": {
    //     "option": "Priority",
    //     "extraFee": 4.99,
    //     "addOrSubtract": "add"
    //   },
    //   "requestUtensils": true,
    //   "isGift": true,
    //   "giftedTo": {
    //     "name": "Sandeep Khanal",
    //     "phone": "9847042878",
    //     "giftMessage": "Happy Birthday, Enjoy your Birthday",
    //     "from": "Team Saayog"
    //   },
    //   "cod": false,
    //   "paymentMethod": {
    //     "_id": "334456666",
    //     "method": "American Express 4005",
    //     "paymentOption": "Personal",
    //   },
    //   "tips": {
    //     "percentOrDollar": "percent",
    //     "value": 20,
    //     "dollarValue": 45
    //   }
    }

    //dispatch(getShoppingCart(responseData));

  };
};

//Orders

export const getUserReceipt = (orderid) => {
  return async (dispatch, store) => {
    const responseData = {
      "_id": "6010e055b2d6aa29dc2e3698",
      "order_id": "6010e055b2d6aa29dc2e3735",
      "cartItem": [{ // orderItem
        "_id": "6010e055b2d6aa29dc2e3239",
        "qty": 2,
        "menuItem": {
          "_id": "6024a81e36ba9d1f35934523",
          "name": "Steamed Chicken Momo",
          "priceNow": 100.00,
          "priceWas": 119.00,
        },
        "price": 100.00,
        "subTotal": 200.00,
        "discount": 30.50,
        "instruction": "well done",
        "selectedOption": "None",
      }, {
        "_id": "6010e055b2d6aa29dc2e3640",
        "qty": 2,
        "menuItem": {
          "_id": "6024a81e36ba9d1f35934523",
          "name": "Steamed Buff Momo",
          "priceNow": 100.00,
          "priceWas": 119.00,
        },
        "price": 100.00,
        "subTotal": 200.00,
        "discount": 30.50,
        "instruction": "well done",
        "selectedOption": "None",
      },
      ],
      "totalItem": 3,
      "promoCode": "10FREE",
      "lastUpdated": "2021-04-24",
      "retailLocation": {
        "_id": "60483ee67df335810bf771f7",
        "streetAddress": "65 Amar Path",
        "municipality": {
          "_id": "2334",
          "name": "Butwal"
        },
        "district": {
          "_id": "2334",
          "name": "Rupandehi"
        },
        "province": {
          "_id": "2334",
          "name": "Province 5"
        },
        "retailer": {
          "_id": "60483ee67df335810bf771f7",
          "name": "My Friends Cafe & Bar",

        },
      },
      "subTotal": 350.00,
      "discount": 30.50,
      "deliveryFee": 5.50,
      "serviceFee": 10.00,
      "localFee": 2.00,
      "taxes": 20.00,
      "total": 257.00,
      "businessCategory": {
        "_id": "60483ee67df335810bf771f7",
        "name": "Restaurant"
      },
      "deliveryAddress": {
        "_id": "60483ee67df335810bf771f7",
        "name": "My Friends Cafe & Bar",
        "streetAddress": "65 Amar Path",
        "municipality": {
          "_id": "2334",
          "name": "Butwal"
        },
        "district": {
          "_id": "2334",
          "name": "Rupandehi"
        },
        "province": {
          "_id": "2334",
          "name": "Province 5"
        },
        "deliveryOption": {
          "option": "Leave at door",
          "instruction": "Ring a door bell"
        },
      },
      "deliveryTime": "45-55 min",
      "deliveryMethod": {
        "option": "Priority",
        "extraFee": 4.99,
        "addOrSubtract": "add"
      },
      "requestUtensils": true,
      "isGift": true,
      "giftedTo": {
        "name": "Sandeep Khanal",
        "phone": "9847042878",
        "giftMessage": "Happy Birthday, Enjoy your Birthday",
        "from": "Team Saayog"
      },
      "cod": false,
      "paymentMethod": {
        "_id": "334456666",
        "method": "American Express 4005",
        "paymentOption": "Personal",
      },
      "tips": {
        "percentOrDollar": "percent",
        "value": 20,
        "dollarValue": 45
      }
    }

    dispatch(getOrderReceipt(responseData));

  };
};

/*
{
        
*/
export const getBusinessCategoryList = () => {
  return async (dispatch, store) => {
      const options = {
        headers: {
          'Authorization': store().authReducer.token
        },
      };
      let response = await instance
        .get(
          Endpoint.GET_BUSINESS_CATEGORY + '/active',
          options
        );
          if (response.status === 200) {
            if (response.data) {
              console.log('FETCHED BUSINESS CATEGORY');
            dispatch(getBusinessCategory(response.data.data));
           
            }
          }
          return response.data.data;
  };
};


export const getHomeScreenProductTagList = (category) => {
  return async (dispatch, store) => {
    const options = {
      headers: {
        'Authorization': store().authReducer.token
      },
    };
    let response = await instance
      .get(
        Endpoint.GET_HOME_PRODUCT_TAG + 'all/' + category,
        options
      );
    if (response.status === 200) {
      if (response.data) {
        console.log('FETCHED PRODUCT TAGS');
        dispatch(getHomeProductTag(response.data.data));
        //  dispatch(getHomeProductTag(res.data.productTag));
      }
    }
    return response.data.data;
    // dispatch(uiLoadingStart());

  };
};

export const getFavBusinessNearYouByTypeList = (category, lat, lang, search_type, maxDistance, customer_id) => {
  return async (dispatch, store) => {
    console.log("customer_id " + customer_id);
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY'

      },
    };
    await axios
      .get(
        Endpoint.GET_FASTEST_NEAR_YOU + category + '?lat=' + lat + '&lang=' + lang + '&searchType=' + search_type + '&maxDistance=' + maxDistance + '&key=' + customer_id,
        options,
      )
      .then(res => {
        console.log("RESPONSE BUSINNESS LOCATION DYNNAMIC API " + search_type);
        console.log(res.data);
        if (res.status === 200) {


          if (res.data.message === "SUCCESS" && res.data.count > 0) {
            console.log('FETCHED FASTEST BUSINESS');
            if (search_type === 'fastest') {
              dispatch(getFastestNearYou(res.data.data));

            }
            if (search_type === 'zero_delivery') {
              dispatch(getZeroDeliveryNearYou(res.data.data));

            }
            if (search_type === 'most_popular') {
              dispatch(getMostPopularNearYou(res.data.data));

            }
            if (search_type === 'now_on_saayog') {
              dispatch(getNowOnSaayogNearYou(res.data.data));

            }
            if (search_type === 'convenience_and_grocery') {
              dispatch(getFastestGroceryNearYou(res.data.data));

            }
            if (search_type === 'saayog_fresh') {

            }
            if (search_type === 'your_favourites') {
              dispatch(getFavBusinessNearYou(res.data.data));

            }

            if (search_type === 'direct_from_home_kitchen') {
              dispatch(getHomeKitchenNearYou(res.data.data));

            }
            if (search_type === 'featured_business') {

            }
            if (search_type === 'great_for_gifting') {

            }
          }

        }
      })
      .catch(error => {
        dispatch(getFastestNearYou([]));

        console.log('FAILED_FASTEST_BUSINESS_FETCH');

      });

  };
};

export const getLastDeliveryAddress = (customer_id) => {
  return async (dispatch, store) => {
    const options = {
      headers: {
        'Authorization': store().authReducer.token
      },
    };
    return await instance
      .get(
        Endpoint.GET_LAST_DELIVERY_ADDRESS + customer_id + '/last-delivery-address',
        options
      );
    // if (response.data.data) {
    //   console.log("DELIVERY ADDRESS");
    //   console.log(response.data.data);
    //   dispatch(setLastDeliveryAddress(response.data.data));
    //   console.log("DELIVERY ADDRESS")
    // }
  }
}

export const getBusinessNearYouByTypeList = (category, lat, lang, search_type, maxDistance) => {
  return async (dispatch, store) => {
    //  dispatch(uiLoadingStart());
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY'

      },
    };
    await axios
      .get(
        Endpoint.GET_FASTEST_NEAR_YOU + category + '?lat=' + lat + '&lang=' + lang + '&searchType=' + search_type + '&maxDistance=' + maxDistance,
        options,
      )
      .then(res => {
        console.log("RESPONSE BUSINNESS LOCATION DYNNAMIC API " + search_type);
        console.log(res.data);
        if (res.status === 200) {


          if (res.data.message === "SUCCESS" && res.data.count > 0) {
            console.log('FETCHED FASTEST BUSINESS');
            if (search_type === 'fastest') {
              dispatch(getFastestNearYou(res.data.data));

            }
            if (search_type === 'zero_delivery') {
              dispatch(getZeroDeliveryNearYou(res.data.data));

            }
            if (search_type === 'most_popular') {
              dispatch(getMostPopularNearYou(res.data.data));

            }
            if (search_type === 'now_on_saayog') {
              dispatch(getNowOnSaayogNearYou(res.data.data));

            }
            if (search_type === 'convenience_and_grocery') {
              dispatch(getFastestGroceryNearYou(res.data.data));

            }
            if (search_type === 'saayog_fresh') {

            }

            if (search_type === 'direct_from_home_kitchen') {
              dispatch(getHomeKitchenNearYou(res.data.data));

            }
            if (search_type === 'featured_business') {

            }
            if (search_type === 'great_for_gifting') {

            }
          }

        }
      })
      .catch(error => {
        dispatch(getFastestNearYou([]));

        console.log('FAILED_FASTEST_BUSINESS_FETCH');

      });
    /*
  const data = [{
    storeName:"The Green Leaf Restro",
    prepTime:'15-30 Min',
    coverImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3CkbyRY_ZozFHuBx9BtGhszAR1uxlGt43g&usqp=CAU',
    dollar:'',
    deliveryFee:1.49,
    currentDeliveryFee:0,
    freeDelivery:'',
    rating:3.5,
    cusine:''
        },
        {
          storeName:"Cafe 4 Restro & Lounge",
          prepTime:'20-30 Min',
          coverImage:'https://c8.alamy.com/comp/R6MGPD/fast-food-banner-juicy-meat-burger-french-fries-potatoes-and-cola-drink-on-blue-background-take-away-meal-unhealthy-diet-concept-with-copy-space-R6MGPD.jpg',
          dollar:'',
          deliveryFee:1.49,
          currentDeliveryFee:0,
          freeDelivery:'',
          rating:4.5,
          cusine:''
              },
              {
                storeName:"Royal Cafe Restaurant",
                prepTime:'2-5 Min',
                coverImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrIWJgXQfis5HrqHcbOlelDfAZgbo67omVQ&usqp=CAU',
                dollar:'',
                deliveryFee:1.49,
                currentDeliveryFee:0,
                freeDelivery:'',
                rating:4.0,
                cusine:''
                    },
                    {
                      storeName:"Siddhartha Cottage Restaurant",
                      prepTime:'5-10 Min',
                      coverImage:'https://static.wixstatic.com/media/749b22_c19bf71c30d34e5d8098b9db7d34fd81~mv2.jpg/v1/fill/w_1960,h_876,al_c,q_85,usm_0.66_1.00_0.01/smart-food-banner.webp',
                      dollar:'',
                      deliveryFee:1.49,
                      currentDeliveryFee:0,
                      freeDelivery:'',
                      rating:3.5,
                      cusine:''
                          },
                          {
                            storeName:"Hangout Village",
                            prepTime:'10-20 Min',
                            coverImage:'https://s3.envato.com/files/269504081/DSC_8614%20copy.jpg',
                            dollar:'',
                            deliveryFee:1.49,
                            currentDeliveryFee:0.49,
                            freeDelivery:'',
                            rating:1.5,
                            cusine:''
                                },
                                {
                                  storeName:"Darkwood Restaurant & Lounge Bar",
                                  prepTime:'20-30 Min',
                                  coverImage:'https://s3.envato.com/files/236189289/jpg/3-1200x628.jpg',
                                  dollar:'',
                                  deliveryFee:1.49,
                                  currentDeliveryFee:1.10,
                                  freeDelivery:'',
                                  rating:0,
                                  cusine:''
                                      }]
                                      */

  };
};

export const getBusinessNearYouBySearchKeyword = (category, lat, lang, search_type, maxDistance,keyword) => {
  return async (dispatch, store) => {
    //  dispatch(uiLoadingStart());
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY'

      },
    };
   return await axios
      .get(
        Endpoint.GET_FASTEST_NEAR_YOU + category + '?lat=' + lat + '&lang=' + lang + '&searchType=' + search_type + '&maxDistance=' + maxDistance+'&keyword='+keyword,
        options,
      );
      // .then(res => {
      //   console.log("RESPONSE BUSINNESS LOCATION DYNNAMIC API " + search_type);
      //   console.log(res.data);
      //   if (res.status === 200) {


      //     if (res.data.message === "SUCCESS" && res.data.count > 0) {
      //       console.log('FETCHED FASTEST BUSINESS');
      //       if (search_type === 'fastest') {
      //         dispatch(getFastestNearYou(res.data.data));

      //       }
      //       if (search_type === 'zero_delivery') {
      //         dispatch(getZeroDeliveryNearYou(res.data.data));

      //       }
      //       if (search_type === 'most_popular') {
      //         dispatch(getMostPopularNearYou(res.data.data));

      //       }
      //       if (search_type === 'now_on_saayog') {
      //         dispatch(getNowOnSaayogNearYou(res.data.data));

      //       }
      //       if (search_type === 'convenience_and_grocery') {
      //         dispatch(getFastestGroceryNearYou(res.data.data));

      //       }
      //       if (search_type === 'saayog_fresh') {

      //       }

      //       if (search_type === 'direct_from_home_kitchen') {
      //         dispatch(getHomeKitchenNearYou(res.data.data));

      //       }
      //       if (search_type === 'featured_business') {

      //       }
      //       if (search_type === 'great_for_gifting') {

      //       }
      //     }

      //   }
      // })
      // .catch(error => {
      //   dispatch(getFastestNearYou([]));

      //   console.log('FAILED_FASTEST_BUSINESS_FETCH');

      // });

  };
};


export const getMenuItemsNearYouBySearchKeyword = (category, lat, lang, search_type, maxDistance,keyword) => {
  return async (dispatch, store) => {
    //  dispatch(uiLoadingStart());
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY'

      },
    };
   return await axios
      .get(
        Endpoint.GET_FASTEST_NEAR_YOU + category + '?lat=' + lat + '&lang=' + lang + '&searchType=' + search_type + '&maxDistance=' + maxDistance+'&keyword='+keyword,
        options,
      );
  };
};
/*
export const getZeroDeliveryNearYouList = (category) => {
  return async (dispatch, store) => {
    //  dispatch(uiLoadingStart());
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY'

      },
    };
    await axios
      .post(
        Endpoint.GET_ZERO_DELIVERY_NEAR_YOU + category,
        {
          "latLang": {
            "type": "Point",
            "coordinates": [-82.9192278, 39.9472395]
          },
          "maxDistance": 6,
          "searchType": "nearby"
        },
        options,
      )
      .then(res => {
        
        if (res.status === 200) {
          

          if (res.data.message === "SUCCESS") {
            console.log('FETCHED ZERO DELIVERY BUSINESS');
            //   const data = [{

            //   }
            // ]
            dispatch(getZeroDeliveryNearYou(res.data.businessLocation));
            // navigation.navigate('SelectProduct');
          }

        }
      })
      .catch(error => {
        dispatch(getZeroDeliveryNearYou([]));
        console.log('FAILED_ ZERO_DELIVERY_FETCH');

      });
  };
};

export const getMostPopularNearYouList = (category) => {
  return async (dispatch, store) => {
    //  dispatch(uiLoadingStart());
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY'

      },
    };
    await axios
      .post(
        Endpoint.GET_ZERO_DELIVERY_NEAR_YOU + category,
        {
          "latLang": {
            "type": "Point",
            "coordinates": [-82.9192278, 39.9472395]
          },
          "maxDistance": 6,
          "searchType": "nearby"
        },
        options,
      )
      .then(res => {
        
        if (res.status === 200) {
          

          if (res.data.message === "SUCCESS") {
            console.log('FETCHED ZERO DELIVERY BUSINESS');
            //   const data = [{

            //   }
            // ]
            dispatch(getMostPopularNearYou(res.data.businessLocation));
            // navigation.navigate('SelectProduct');
          }

        }
      })
      .catch(error => {
        dispatch(getMostPopularNearYou([]));
        console.log('FAILED_ ZERO_DELIVERY_FETCH');

      });
  };
};
*/

export const getTodaysHomeScreenBanner = (category) => {
  return async (dispatch, store) => {
    // dispatch(uiLoadingStart());
    const options = {
      headers: {
        'Authorization': store().authReducer.token
      },
    };
    let response = await instance
      .get(
        Endpoint.GET_HOME_BANNER + 'category/' + category,
        options
      );
    if (response.status === 200) {
      if (response.data) {
        console.log('FETCHED HOME SCREEN BANNER');
        dispatch(getHomeBanner(response.data.data));
        // navigation.navigate('SelectProduct');
      }

    }
    return response.data.data;
  };
};
/*
export const getNowOnSaayogNearYouList = (category) => {
  return async (dispatch, store) => {
    //  dispatch(uiLoadingStart());
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY'
      },
    };
    await axios
      .post(
        Endpoint.GET_NOW_ON_SAAYOG_NEAR_YOU + category,
        {
          "latLang": {
            "type": "Point",
            "coordinates": [-82.9192278, 39.9472395]
          },
          "maxDistance": 6,
          "searchType": "nearby"
        },
        options,
      )
      .then(res => {
        
        if (res.status === 200) {
          

          if (res.data.message === "SUCCESS") {
            console.log('FETCHED NOW ON SAAYOG BUSINESS');
            //   const data = [{

            //   }
            // ]
            dispatch(getNowOnSaayogNearYou(res.data.businessLocation));
            // navigation.navigate('SelectProduct');
          }

        }
      })
      .catch(error => {
        dispatch(getNowOnSaayogNearYou([]));
        console.log('FAILED_ NOW_ON_SAAYOG_FETCH');

      });
  };
};

export const getFastestGroceryNearYouList = () => {
  return async (dispatch, store) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY'

      },
    };
    // var categoryObject = store().eatsReducer.businessCategory;

    var category = store().eatsReducer.businessCategory.filter(e => e.slug === "grocery");

    await axios
      .post(
        Endpoint.GET_FASTEST_NEAR_YOU + category[0]._id,
        {
          "latLang": {
            "type": "Point",
            "coordinates": [-82.9192278, 39.9472395]
          },
          "maxDistance": 6,
          "searchType": "fastest"
        },
        options,
      )
      .then(res => {
        
        if (res.status === 200) {
          

          if (res.data.message === "SUCCESS") {
            console.log('FETCHED FASTEST GROCERY BUSINESS');

            dispatch(getFastestGroceryNearYou(res.data.businessLocation));

          }

        }
      })
      .catch(error => {
        dispatch(getFastestGroceryNearYou([]));
        console.log('FAILED_FASTEST_GROCERY_BUSINESS_FETCH');

      });
  };
};

export const getHomeKitchenNearYouList = (category) => {
  return async (dispatch, store) => {
    //  dispatch(uiLoadingStart());
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY'

      },
    };
    await axios
      .post(
        Endpoint.GET_NEARBY_HOME_KITCHEN_MENU_ITEM + category,
        {
          "latLang": {
            "type": "Point",
            "coordinates": [-82.9192278, 39.9472395]
          },
          "maxDistance": 6,
          "searchType": "fastest"
        },
        options,
      )
      .then(res => {
        
        if (res.status === 200) {
          
          if (res.data.message === "SUCCESS") {
            console.log('FETCHED FASTEST HOME KITCHEN');
            dispatch(getHomeKitchenNearYou(res.data.businessLocation));
          }
        }
      })
      .catch(error => {
        dispatch(getHomeKitchenNearYou([]));
        console.log('FAILED_NEARBY_HOME_KITCHEN_FETCH');

      });

  };
};
*/
export const getHomeScreenDataByCategory = (storeid) => {
  return async (dispatch, store) => {
    axios.all([
      axios.get(Endpoint.GET_BUSINESS_LOCATION_DETAILS + storeid),
      axios.get('https://api.github.com/users/mzabriskie/orgs')
    ]).then(axios.spread(function (storeDetails, orgs) {
      dispatch(getHomeKitchenNearYou(user));
      dispatch(getHomeKitchenNearYou(orgs));
    }));
  }
}

export const submitGiftDetails = (values) => {
  return async (dispatch, store) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY',
        'Authorization': store().authReducer.token
      },
    };
    const response = await instance
    .post(
      Endpoint.GET_GIFTED_TO,
      {
        name : values.sendTo,
        phone : values.phone,
        giftMessage : values.giftMessage,
        from : values.from,
        customer : store().authReducer.user.customer_id,
        shoppingCart : store().authReducer.user.shoppingCart
      },
      options,
    );
    console.log(response);
    if (response.status === 200) {
      if (response.data.message === "SUCCESS") {
        dispatch(getGiftDetails(response.data.data));
      }
    }
    return response.data;
  }
}

export const submitPickup = (pickup) => {
  return async (dispatch, store) => {
    console.log(pickup);
    dispatch(getPickup(pickup));
  }
}

export const submitRetailer = (retailer) => {
  return async (dispatch, store) => {
    console.log(retailerHours);
    dispatch(getRetailerHours(retailer));
  }
}

export const submitRetailerHours = (retailerHours) => {
  return async (dispatch, store) => {
    console.log(retailerHours);
    dispatch(getRetailer(retailerHours));
  }
}

export const getBusinessNearYouListByCusine = (tag, category, lat, lang, search_type, maxDistance, customer_id) => {
  return async (dispatch, store) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        applicationName: store().deviceInformationReducer.deviceInformation
          .appName,
        applicationKey: 'CHALAKPUBLICKEY'

      },
    };
    await axios
      .get(
        Endpoint.GET_FASTEST_NEAR_YOU + category + '?lat=' + lat + '&lang=' + lang + '&searchType=' + search_type + '&maxDistance=' + maxDistance + '&key=' + customer_id + '&tag=' + tag,
        options,
      )
      .then(res => {
        console.log("RESPONSE BUSINNESS LOCATION DYNNAMIC API " + search_type);
        console.log(res.data);
        if (res.status === 200) {


          if (res.data.message === "SUCCESS" && res.data.count > 0) {
            console.log('FETCHED BUSINESS BY CUSINE/CATEGORY');
            dispatch(getStoreListByCusineOrCategory(res.data.data));
          }
        }
      }).catch(err => {
        console.log(err);
      })

  }
}