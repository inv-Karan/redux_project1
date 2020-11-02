import {ACTION1, ACTION2, ACTION3, ACTION4} from './actions';

// const initialState = {
//     details: [
//         {
//             id: 1,
//             moviename: "Piku",
//             actors: "Amitabh",
//             years: 2000
//         },
//         {   
//             id: 2,
//             moviename: "Hera Pheri",
//             actors: "Paresh Rawal",
//             years: 2002
//         },
//         {
//             id: 3,
//             moviename: "Phir Hera Pheri",
//             actors: "Akshay Kumar",
//             years: 2008
//         }
//     ]
// }

export default function reducer(state = {}, action) {

    switch(action.type) {
        case ACTION1:
            return {
                ...state,
                details: state.details.filter(detail => 
                detail.actors === action.payload.actors)
            };
        
        case ACTION2:
            return {
                ...state,
                details: state.details.filter(detail => 
                detail.years === action.payload.years)
            };

        case ACTION3:
            return {
                ...state,
                details: state.details++
            };

        case ACTION4:
            return state;

        default:
            return state;
    };
};