import {
  addressEndpoints,
  authEndpoints,
  FavEndpoints,
  homeEndpoints,
  navEndpoints,
  paymentEndpoints,
  productsEndpoints,
  profileEndpoints,
  subscripeEndpoints,
} from "./axiosEndpoints";

export const authService = {
  Register: {
    method: "POST",
    url: authEndpoints.REGISTER,
  },
  Login: {
    method: "POST",
    url: authEndpoints.LOGIN,
  },
  ForgorPassword: {
    method: "POST",
    url: authEndpoints.FORGOT_PASSWORD,
  },
  ConfirmOtp: {
    method: "POST",
    url: authEndpoints.CONFIRM__OTP,
  },
  ResetPassword: {
    method: "PUT",
    url: authEndpoints.RESET_PASSWORD,
  },
};

export const navService = {
  Maincategory: {
    method: "GET",
    url: navEndpoints.MAIN__CATEGORY,
  },
};

export const homeService = {
  Collection: {
    method: "GET",
    url: homeEndpoints.COLLECTION,
  },
  getHomeProducts: {
    method: "GET",
    url: homeEndpoints.HOMESCREEN_PRODUCTS,
  },
  HomeScreen: {
    method: "GET",
    url: homeEndpoints.HOMESCREEN,
  },
};

export const productService = {
  Products: {
    method: "GET",
    url: productsEndpoints.PRODUCTS,
  },
  productsByCategory: {
    method: "GET",
    url: productsEndpoints.PROUCTS_By_CATEGORY,
  },
  singleProduct: {
    method: "GET",
    url: productsEndpoints.SINGLE_PRODUCT,
  },
  verifyDelivery: {
    method: "GET",
    url: productsEndpoints.DELIVERY_STATUS,
  },
  addReviews: {
    method: "POST",
    url: productsEndpoints.ADD_REVIEWS,
  },
};

export const favService = {
  getFavourites: {
    method: "GET",
    url: FavEndpoints.GET_FAV,
  },
  addFavourites: {
    method: "POST",
    url: FavEndpoints.ADD_FAV,
  },
  deleteFavourites: {
    method: "POST",
    url: FavEndpoints.DELETE_FAV,
  },
};

export const profileService = {
  getCustomerbyIdEmail: {
    method: "GET",
    url: profileEndpoints.PROFILE,
  },
  updateCustomer: {
    method: "POST",
    url: profileEndpoints.UPDATE_PROFILE,
  },
  help: {
    method: "POST",
    url: profileEndpoints.HELP,
  },
};

export const paymentService = {
  getAllSubcription: {
    method: "GET",
    url: paymentEndpoints.SUBSCRIPTION_PLANS,
  },
  stripePay: {
    method: "POST",
    url: paymentEndpoints.STRIPE,
  },
  updateTransaction: {
    method: "POST",
    url: paymentEndpoints.TRANSACTION,
  },
};

export const addressService = {
  getAddress: {
    method: "GET",
    url: addressEndpoints.GET_ADDRESS,
  },
  addAddress: {
    method: "POST",
    url: addressEndpoints.ADD_ADDRESS,
  },
  deleteAddress: {
    method: "POST",
    url: addressEndpoints.DELETE_ADDRESS,
  },
  updateAddress: {
    method: "POST",
    url: addressEndpoints.UPDATE_ADDRESS,
  },
};

export const subscriptionService = {
  newsLetter: {
    method: "POST",
    url: subscripeEndpoints.NEWSLETTER,
  },
};
