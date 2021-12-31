export const initialState = {
    product: [],
    showreviews:[],
    currentUser: null,
    isAuth:null,
    propertywishlist: [],
};

function reducer(state, action) {
    //console.log(action);
    switch (action.type) {
        case "VIEW_PROPERTY":
            // lOGIC TO VIEW PRODUCT
            return {
                ...state,
                product: [action.product],
            };
        case "SHOW_ALL_REVIEWS":
            // lOGIC TO VIEW PRODUCT
            return {
               ...state,
                showreviews: action.showreviews,
            };
        case "LOGIN_USER":
            return {
                ...state,
                currentUser: action.payload
            }
        case "SET_USER":
            return {
                ...state,
                currentUser: action.payload
            }
        case "IS_LOGGEDIN":
            return {
                ...state,
                isAuth: action.payload
            }
        case "SIGNOUT_USER":
            return {
                ...state,
                currentUser: null,
                isAuth: false
            }
        case "GET_PROPERTY":
            return{
                ...state,
                product: action.payload

            }
        case "SEARCH_DATA":
            return{
                ...state,
                searchdata: action.payload

            }
        default:
            return state;
    }
}

export default reducer;