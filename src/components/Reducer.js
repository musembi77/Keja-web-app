export const initialState = {
    product: [],
    currentUser: null,
    isAuth:null,
    propertywishlist: [],
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "VIEW_PROPERTY":
            // lOGIC TO VIEW PRODUCT
            return {
                ...state,
                product: [action.product],
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
        // case "ADD_TO_WATCHLIST":
        //     // lOGIC TO ADD ITEMS TO moviewatchlist
        //     return {
        //         ...state,
        //         moviewatchlist: [...state.moviewatchlist, action.movie],
        //     };
        // case "REMOVE_FROM_MOVIEWATCHLIST":
        //     // lOGIC TO REMOVE ITEMS from MOVIEWATCHLIST

        //     let newmoviewatchlist = [...state.moviewatchlist];

        //     const index = state.moviewatchlist.findIndex(
        //         (moviewatchlistItem) => moviewatchlistItem.id === action.id
        //     );

        //     if (index >= 0) {
        //         // item exists in MOVIEWATCHLIST, remove it...
        //         newmoviewatchlist.splice(index, 1);
        //     } else {
        //         console.warn("Cant remove MOVIE");
        //     }
        //     return {
        //         ...state,
        //         moviewatchlist: newmoviewatchlist,
        //     };
        // case "SET_USER":
        //     return{
        //         ...state,
        //         user:action.user,
        //         displayName:action.displayName
        //     }
        default:
            return state;
    }
}

export default reducer;