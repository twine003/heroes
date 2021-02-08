import { types } from '../types'

const stateInitial = {
    loading: false,
    filters: {
      name: {
        value: '',
        exactMatch: false,
      }
    },
    sortName: '',
    stories: [],
    single_storie: null,
    page: 0,
    maxPage: 0,
    limitPerPage: 50,
  };

export const storieReducer = ( state = stateInitial, action ) => {
    switch ( action.type ) {
        case types.storieLoadSingle:
            return {
                ...state,
                single_storie: action.payload.storie,
            }
       
    
        default:
            return state;
    }

}