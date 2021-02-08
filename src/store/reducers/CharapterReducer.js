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
    characters: [],
    single_character: null,
    page: 0,
    maxPage: 0,
    limitPerPage: 50,
  };

export const charapterReducer = ( state = stateInitial, action ) => {
    switch ( action.type ) {
        case types.charaptersLoad:
            return {
                ...state,
                characters: action.payload.characters,
                maxPage: action.payload.maxPage,
                page: action.payload.page,
            }
        case types.charapterLoadSingle:
          return {
            ...state,
            single_character: action.payload.single_character
        }
        case types.logout:
                return { }
    
        default:
            return state;
    }

}