export const authEndpoints = Object.freeze({
  REGISTER: "/ophelia/registration",
  LOGIN: "/ophelia/userlogin",
  FORGOT_PASSWORD: "/ophelia/forgotpassword",
  CONFIRM__OTP: "/ophelia/confirmation",
  RESET_PASSWORD: "/ophelia/updatepassword",
});

export const navEndpoints = Object.freeze({
  MAIN__CATEGORY: "/ophelia/mainproducts",
});

export const profileEndpoints = Object.freeze({
  PROFILE: "/render/user/email",
  UPDATE_PROFILE: "/render/user/update",
});

export const homeEndpoints = Object.freeze({
  COLLECTION: "/render/homescreen/collection/type",
  HOMESCREEN_PRODUCTS: "/render/homescreen/collection",
  HOMESCREEN: "/render/homescreen",
});

export const productsEndpoints = Object.freeze({
  PRODUCTS: "/ophelia/products/home",
  PROUCTS_By_CATEGORY: "/ophelia/products/allproducts",
  ADD_REVIEWS: "/render/add/reviews",
});

export const FavEndpoints = Object.freeze({
  ADD_FAV: "/render/add/favourites",
  GET_FAV: "/render/get/favorites",
});

export const paymentEndpoints = Object.freeze({
  STRIPE: "/stripe/pay",
  TRANSACTION: "/add/transaction",
  SUBSCRIPTION_PLANS: "/get/all/subcription",
});
