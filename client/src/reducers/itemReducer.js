import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from "./../actions/types";

const initialState = {
  items: [], //we grab this from our databse.
  loading: false //this is here because fetching data from db isnt
  //instant, so this allows our app to wait for the data rather than keep
  //re sending the request.
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_ITEMS:
      return {
        ...state, //returns original items that were static
        items: action.payload, //returns items from database
        loading: false //tells app we are no longer loading
      }
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter(item => item._id !== action.payload)
        };
      case ADD_ITEM:
        return {
          ...state,
          items: [action.payload, ...state.items]
        };
      case ITEMS_LOADING:
          return{
            ...state,
            loading: true
          }


      default:
        return state;
  }
}
