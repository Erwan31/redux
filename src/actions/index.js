export function GetMoviesList(){
    // Goto database to get data

    return {
        type: 'MOVIES_LIST',
        payload: [
            { id:12, name:'Lord of the Rings'},
            { id:59, name:'Matrix'},
            { id:155, name:'The Godfather'},
        ]
    }
}