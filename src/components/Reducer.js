export const initialState = {
    product: [],
    
    propertywishlist: [],
    user: null,
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