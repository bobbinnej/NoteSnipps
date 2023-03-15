export default (noteReducers= [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_NOTES':
            return action.payload;
        case 'CREATE_NOTE':
            return noteReducers;
        default:
           return noteReducers;
    }
};