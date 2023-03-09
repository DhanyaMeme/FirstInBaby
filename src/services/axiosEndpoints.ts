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
  HELP: `/fib/v1/customer/contactus/add`,
  PLANS: `/fib/v1/get/referralplan`,
  SUBCRIPTION: `/ophelia/user/subcription`,
  UPDATE_SUBCRIPTION: `/fib/v1/customer/update/subscription`,
  GET_ORDER: `/ophelia/orderhistory`,
  PLACE_ORDER: `/fib/v1/customer/order`,
  UPDATE_ORDER: `/ophelia/admin/order/status`,
});

export const homeEndpoints = Object.freeze({
  SHOP_BY_COLLECTION: "/fib/v1/collection/get/collectionhome/0/9",
  SHOP_BY_PRODUCTS: "/fib/v1/collection/get/shopbyproducts/0/16",
  HOT_DEALS_COLLECTION: "/fib/v1/collection/get/hotdeals/0/4",
  HOT_SALE_COLLECTION: "/fib/v1/collection/get/hotsale/0/1",
  FEATURED_COLLECTION: "/fib/v1/collection/get/featured/0/1",
  INSTAFEEDS_COLLECTION: "/fib/v1/collection/get/instafeed/0/1",
  HOMESCREEN_PRODUCTS: "/render/homescreen/collection",
  HOT: "/fib/v1/menu/products/collections",
  FEATURE: "/fib/v1/menu/products/collections",
  INSTAFEEDS: "/fib/v1/menu/products/collections",
});

export const productsEndpoints = Object.freeze({
  ALL_PRODUCTS: "/ophelia/products/home",
  PROUCTS_By_CATEGORY: "/fib/v1/menu/products",
  PRODUCTS_BY_SHOPBY: "/ophelia/shopbyproducts",
  SEARCH_PRODUCTS: "/fib/v1/menu/products/search",
  PRODUCTS_BY_SHOPByCOLLECTION: "/fib/v1/menu/products/collections",
  SINGLE_PRODUCT: "/fib/v1/menu/product",
  ADD_REVIEWS: "/fib/v1/menu/product/add/review",
  GET_REVIEWS: "/fib/v1/menu/product/get/review",
  DELIVERY_STATUS: "/ophelia/verify/delivery",
  PREORDER: "/fib/v1/menu/products/presale",
});

export const FavEndpoints = Object.freeze({
  ADD_FAV: "/fib/v1/menu/add/favorite",
  GET_FAV: "/fib/v1/menu/get/favorites",
  DELETE_FAV: "/ophelia/delete/favorite",
});

export const CartEndpoints = Object.freeze({
  ADD_CART: "/fib/v1/customer/add/cart",
});

export const paymentEndpoints = Object.freeze({
  STRIPE: "/fib/v1/customer/pay",
  SUBSCRIPTION_PLANS: "/get/all/subcription",
  UPDATE_SUBSCRIPTION_PLAN: "/ophelia/user/subscription/update",
});
