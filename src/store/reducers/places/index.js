import { ADD_PLACE, DELETE_PLACE } from '../../actions/actionTypes';

const initialState = {
    places: []
};


const places = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                        uri: "https://img00.deviantart.net/a92a/i/2011/195/a/9/another_day_in_paradise_by_priteeboy-d3r0849.jpg"
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== action.placeKey;
                })
            };
        default:
            return state;
    }
};



export default places;