import {types} from '../types';
import { getComicsByCharacter, getMarvelCharacters, getStorieById} from '../services/API';

export const startLoadingCharapters = ( options ) => {
    return async( dispatch ) => {
        const charapters = await getMarvelCharacters( options );
        dispatch( setCharapters( {...charapters, page: options.page} ) );

    }
}

export const startLoadingSingleCharapter = ( options ) => {
    return async( dispatch ) => {
        const charapters = await getComicsByCharacter( options.id );
        dispatch( setSingleCharapter( {...charapters, page: options.page} ) );

    }
}


export const setCharapters = ( charapters ) => ({
    type: types.charaptersLoad,
    payload: charapters
});

export const setSingleCharapter = ( charapter ) => ({
    type: types.charapterLoadSingle,
    payload: charapter
});

