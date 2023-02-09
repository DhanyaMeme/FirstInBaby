export const authEndpoints = Object.freeze({
  REGISTER: "/ophelia/registration",
  LOGIN: "/ophelia/userlogin",
  FORGOT_PASSWORD: "/ophelia/forgotpassword",
  CONFIRM__OTP: "/ophelia/confirmation",
  RESET_PASSWORD: "/ophelia/updatepassword",
});

export const addressEndpoints = Object.freeze({
  GET_ADDRESS: "/ophelia/address",
  ADD_ADDRESS: "/ophelia/address",
  DELETE_ADDRESS: "/ophelia/address/id",
  UPDATE_ADDRESS: "/ophelia/user/address/update",
});

export const navEndpoints = Object.freeze({
  MAIN__CATEGORY: "/ophelia/mainproducts",
});

export const profileEndpoints = Object.freeze({
  PROFILE: "/ophelia/useraddress",
  UPDATE_PROFILE: "/ophelia/updateuser",
  HELP: `/ophelia/help`,
  SUBCRIPTION: `/ophelia/user/subcription`,
  PLANS: `/ophelia/user/plans`,
  UPDATE_SUBCRIPTION: `updateSubscription`,
  GET_ORDER: `/ophelia/orderhistory`,
  PLACE_ORDER: `/ophelia/placeorder`,
  UPDATE_ORDER: `/ophelia/admin/order/status`,
});

export const homeEndpoints = Object.freeze({
  COLLECTION: "/ophelia/get/collectionhome",
  HOMESCREEN_PRODUCTS: "/render/homescreen/collection",
  HOMESCREEN: "/render/homescreen",
  HOT: "/ophelia/get/hot",
  FEATURE: "/ophelia/products/featured",
});

export const productsEndpoints = Object.freeze({
  ALL_PRODUCTS: "/ophelia/products/home",
  PROUCTS_By_CATEGORY: "/ophelia/products/allproducts",
  ADD_REVIEWS: "/ophelia/add/review",
  DELIVERY_STATUS: "/ophelia/verify/delivery",
  SINGLE_PRODUCT: "/ophelia/products/product",
});

export const FavEndpoints = Object.freeze({
  ADD_FAV: "/ophelia/favorites",
  GET_FAV: "/ophelia/favorites",
  DELETE_FAV: "/ophelia/delete/favorite",
});

export const paymentEndpoints = Object.freeze({
  STRIPE: "/ophelia/stripe/pay",
  TRANSACTION: "/add/transaction",
  SUBSCRIPTION_PLANS: "/get/all/subcription",
});

export const subscripeEndpoints = Object.freeze({
  NEWSLETTER: "/ophelia/newsletter",
});
