export const ProductView = {
  "4:4": {
    "data-desktop-count": 4,
    "data-mobile-count": 2,
    class: "Grid__Cell 1/2--phone 1/3--tablet-and-up  1/4--desk",
  },
  "2:2": {
    "data-desktop-count": 3,
    "data-mobile-count": 2,
    class: "Grid__Cell 1/2--phone  1/2--tablet-and-up 1/3--desk",
  },
  "1:1": {
    "data-desktop-count": 4,
    "data-mobile-count": 1,
    class: "Grid__Cell 1/1--phone 1/3--tablet-and-up 1/4--desk",
  },
};

export const initialAsyncData = {
  loading: false,
  error: null,
  data: null,
};

export const initialFormState = {
  errors: {},
  helperText: "",
  submitSuccess: false,
  isButtonLoading: false,
};
