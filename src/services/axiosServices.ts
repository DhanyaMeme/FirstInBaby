import {
  addressEndpoints,
  authEndpoints,
  CartEndpoints,
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
  getHomeProducts: {
    method: "GET",
    url: homeEndpoints.HOMESCREEN_PRODUCTS,
  },
  HomeScreen: {
    method: "GET",
    url: homeEndpoints.HOMESCREEN,
  },
  getProductsHot: {
    method: "GET",
    url: homeEndpoints.HOT,
  },
  getFeatureProducts: {
    method: "GET",
    url: homeEndpoints.FEATURE,
  },
  getShopByCollection: {
    method: "GET",
    url: homeEndpoints.SHOP_BY_COLLECTION,
  },
  getShopByProducts: {
    method: "GET",
    url: homeEndpoints.SHOP_BY_PRODUCTS,
  },
};

export const productService = {
  getAllProducts: {
    method: "GET",
    url: productsEndpoints.ALL_PRODUCTS,
  },
  getProductsByCategory: {
    method: "GET",
    url: productsEndpoints.PROUCTS_By_CATEGORY,
  },
  getProductsByShopby: {
    method: "GET",
    url: productsEndpoints.PRODUCTS_BY_SHOPBY,
  },
  getProductsByCollection: {
    method: "GET",
    url: productsEndpoints.PRODUCTS_BY_SHOPByCOLLECTION,
  },
  getSearch: {
    method: "GET",
    url: productsEndpoints.SEARCH_PRODUCTS,
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

export const cartService = {
  addCart: {
    method: "POST",
    url: CartEndpoints.ADD_CART,
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
  subscription: {
    method: "GET",
    url: profileEndpoints.SUBCRIPTION,
  },
  UpdateSubscription: {
    method: "POST",
    url: profileEndpoints.UPDATE_SUBCRIPTION,
  },
  plans: {
    method: "POST",
    url: profileEndpoints.PLANS,
  },
  getOrder: {
    method: "GET",
    url: profileEndpoints.GET_ORDER,
  },
  placeOrder: {
    method: "POST",
    url: profileEndpoints.PLACE_ORDER,
  },
  updateOrder: {
    method: "POST",
    url: profileEndpoints.UPDATE_ORDER,
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
