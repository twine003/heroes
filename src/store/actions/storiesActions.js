import {types} from '../types';
import {getStorieById, getMarvelStories}  from '../services/API';


export const startLoadingStories = ( options ) => {
    return async( dispatch ) => {
        const stories = await getMarvelStories( options );
        dispatch( setStories( {...stories, page: options.page}));

    }
}

export const startLoadingSingleStorie = ( options ) => {
    return async( dispatch ) => {
        const storie = await getStorieById( options.id );
        dispatch( setSingleStorie( {...storie }));

    }
}


export const setStories = ( stories ) => ({
    type: types.storieLoad,
    payload: stories
});

export const setSingleStorie = ( storie ) => ({
    type: types.storieLoadSingle,
    payload: storie
});

