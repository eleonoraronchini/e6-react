export const addFavorite = (company) => {
    return {
        type: "ADD_FAVORITE",
        payload: company,
    };
};

export const removeFavorite = (company) => {
    return {
        type: "REMOVE_FAVORITE",
        payload: company,
    };
};
