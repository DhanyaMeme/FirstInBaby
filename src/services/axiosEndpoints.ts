export const authEndpoints = Object.freeze({
  REGISTER: "/fib/v1/customer/registration",
  LOGIN: "/fib/v1/customer/login",
  FORGOT_PASSWORD: "/fib/v1/customer/resetpassword/generateotp",
  CONFIRM__OTP: "/fib/v1/customer/confirmation",
  RESET_PASSWORD: "/fib/v1/customer/update/password",
});

export const subscripeEndpoints = Object.freeze({
  NEWSLETTER: "/fib/newsletter",
});

export const navEndpoints = Object.freeze({
  MAIN__CATEGORY: "/fib/v1/menu",
});

export const addressEndpoints = Object.freeze({
  GET_ADDRESS: "/ophelia/address",
  ADD_ADDRESS: "/fib/v1/customer/add/address",
  DELETE_ADDRESS: "/fib/v1/customer/delete/address/",
  UPDATE_ADDRESS: "/fib/v1/customer/address/update",
});

export const profileEndpoints = Object.freeze({
  GET_PROFILE: "/fib/v1/customer/address",
  UPDATE_PROFILE: "/fib/v1/customer/update/profile",
  HELP: `/ophelia/help`,
  PLANS: `/fib/v1/get/referralplan`,
  SUBCRIPTION: `/ophelia/user/subcription`,
  UPDATE_SUBCRIPTION: `/fib/v1/customer/update/subscription`,
  GET_ORDER: `/ophelia/orderhistory`,
  PLACE_ORDER: `/ophelia/placeorder`,
  UPDATE_ORDER: `/ophelia/admin/order/status`,
});

export const homeEndpoints = Object.freeze({
  SHOP_BY_COLLECTION: "/fib/v1/collection/get/collectionhome/0/9",
  SHOP_BY_PRODUCTS: "/fib/v1/collection/get/shopbyproducts/0/16",
  HOT_DEALS_COLLECTION: "/fib/v1/collection/get/hotdeals/0/4",
  HOMESCREEN_PRODUCTS: "/render/homescreen/collection",
  HOT: "/ophelia/get/hot",
  FEATURE: "/ophelia/products/featured",
});

export const productsEndpoints = Object.freeze({
  ALL_PRODUCTS: "/ophelia/products/home",
  PROUCTS_By_CATEGORY: "/fib/v1/menu/products",
  PRODUCTS_BY_SHOPBY: "/ophelia/shopbyproducts",
  SEARCH_PRODUCTS: "/ophelia/product/serach",
  PRODUCTS_BY_SHOPByCOLLECTION: "/ophelia/get/products/collection",
  SINGLE_PRODUCT: "/ophelia/products/product",
  ADD_REVIEWS: "/ophelia/add/review",
  DELIVERY_STATUS: "/ophelia/verify/delivery",
  PREORDER: `/ophelia/preorder`,
});

export const FavEndpoints = Object.freeze({
  ADD_FAV: "/ophelia/favorites",
  GET_FAV: "/ophelia/favorites",
  DELETE_FAV: "/ophelia/delete/favorite",
});

export const CartEndpoints = Object.freeze({
  ADD_CART: "/ophelia/addcart/nazcas",
});

export const paymentEndpoints = Object.freeze({
  STRIPE: "/ophelia/stripe/pay",
  SUBSCRIPTION_PLANS: "/get/all/subcription",
  UPDATE_SUBSCRIPTION_PLAN: "/ophelia/user/subscription/update",
});
