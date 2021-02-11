const marvelURL = 'https://gateway.marvel.com/v1/public/';

// const hash = "03e206b64b2c7dd6eea20b183d2f259d";
// const apikey = "57a1a3bed71f089b1352bee0703ccbfe";

const hash = "03e206b64b2c7dd6eea20b183d2f259d";
const apikey = "57a1a3bed71f089b1352bee0703ccbfe";


const getMarvelCharacters = (options) => {
  const {
    offset,
    name,
    exactMatch,
    sortName,
    limit,
  } = Object.assign({
    offset: 0,
    name: '',
    exactMatch: false,
    sortName: '',
    limit: 20,
  }, options);

  let url =
    `${marvelURL}characters?ts=1&apikey=${apikey}&hash=${hash}&offset=${offset}&orderBy=${sortName}name&limit=${limit}`;
  if (name) {
    if (exactMatch) { url += `&name=${name}`; }
    else { url += `&nameStartsWith=${name}`; }
  }
  return fetch(url)
    .then(res => res.json())
    .then((resObj) => {
      try {
        if (resObj.code === 200) {
          if (offset > resObj.data.total) {
            throw new Error('Page does not exist.');
          } else {
            const pages = Math.floor(resObj.data.total / limit);
            return {
              characters: resObj.data.results,
              maxPage: resObj.data.total % limit > 0 ? pages + 1 : pages,
            };
          }
        } else {
          throw new Error(`Marvel API bad response. Status code ${resObj.code}.`);
        }
      } catch (e) {
        console.error(e);
        return {
          characters: [],
          maxPage: 0,
        };
      }
    });
}

const getComicsByCharacter = (characterId, offset = 0) =>{
  // const URI = `/v1/public/characters/${characterId}/comics`
  // const params = `?apikey=${config.publicKey}&limit=20&offset=${offset}`
  const url = `${marvelURL}characters/${characterId}?ts=1&apikey=${apikey}&hash=${hash}&offset=${offset}&limit=20`

  return fetch(url).then(res => res.json()).then((resObj)=>{
    return {
      single_character: resObj.data.results[0]
    };
  });
}

  const getMarvelStories = (options) => {
    const {
      offset,
      name,
      exactMatch,
      sortName,
      limit,
    } = Object.assign({
      offset: 0,
      name: '',
      exactMatch: false,
      sortName: '',
      limit: 20,
    }, options);
  
    let url =
      `${marvelURL}stories?ts=1&apikey=${apikey}&hash=${hash}&offset=${offset}&limit=${limit}`;
    if (name) {
      if (exactMatch) { url += `&name=${name}`; }
      else { url += `&nameStartsWith=${name}`; }
    }
    return fetch(url)
      .then(res => res.json())
      .then((resObj) => {
        try {
          if (resObj.code === 200) {
            if (offset > resObj.data.total) {
              throw new Error('Page does not exist.');
            } else {
              const pages = Math.floor(resObj.data.total / limit);
              return {
                stories: resObj.data.results,
                maxPage: resObj.data.total % limit > 0 ? pages + 1 : pages,
              };
            }
          } else {
            throw new Error(`Marvel API bad response. Status code ${resObj.code}.`);
          }
        } catch (e) {
          console.error(e);
          return {
            stories: [],
            maxPage: 0,
          };
        }
      });
  }

  const getStorieById = (storieId) =>{
    const url = `${marvelURL}stories/${storieId}?ts=1&apikey=${apikey}&hash=${hash}`
    const url_comics = `${marvelURL}stories/${storieId}/comics?ts=1&apikey=${apikey}&hash=${hash}`
    return fetch(url).then(res => res.json()).then(async (resObj)=>{
      console.log('getStorieById', resObj);
      if (resObj.code === 200) {
        let storie = resObj.data?.results[0]
        let datacomics = await fetch(url_comics).then(res => res.json());
        storie.comics.items = datacomics.data?.results;
        return {
          storie: storie
        };
      } else {
        return {
          storie: null
        };
      }
      
    });
  }

const getCharapters = ()=> {
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`;
  return fetch(url).then((res)=>res.json());
}


export {
  getMarvelCharacters,
  getComicsByCharacter,
  getCharapters,
  getMarvelStories,
  getStorieById,
};