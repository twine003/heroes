import {types} from '../types';
import {  getStorieById} from '../services/API';



export const startLoadingSingleStorie = ( options ) => {
    return async( dispatch ) => {
        const storie = await getStorieById( options.id );
        dispatch( setSingleStorie( {...storie }));

    }
}


// export const setCharapters = ( charapters ) => ({
//     type: types.charaptersLoad,
//     payload: charapters
// });

export const setSingleStorie = ( storie ) => ({
    type: types.storieLoadSingle,
    payload: storie
});

