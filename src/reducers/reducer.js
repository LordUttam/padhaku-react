const reducerFunc = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };

    case "STOCK":
      return { ...state, includeOutStock: !state.includeOutStock };

    case "SPEED":
      return { ...state, shouldBeFast: !state.shouldBeFast };

    case "PRICE":
      return { ...state, price: action.payload };

    case "CATEGORIES":
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload]: !state.categories[action.payload],
        },
      };

    case "COVERTYPE":
      return {
        ...state,
        covertype: {
          ...state.covertype,
          [action.payload]: !state.covertype[action.payload],
        },
      };

    case "RATING":
      return {
        ...state,
        rating: action.payload,
      };

    case "CLEAR_ALL":
      return {
        ...state,
        sortBy: "",
        includeOutStock: false,
        shouldBeFast: false,
        price: 1000,
        categories: {
          exams: false,
          selfhelp: false,
          poetry: false,
          fiction: false,
          nonfiction: false,
        },
        covertype: {
          "Hard Cover": false,
          Paperback: false,
        },
        rating: "0",
      };

    default:
      return { ...state };
  }
};
export { reducerFunc };
